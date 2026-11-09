/* SECTION: stu-pick */
var pickSel = document.getElementById('pickSel');
var pickGo = document.getElementById('pickGo');
(function initPick(){
  var h = '<option value="">── 请选择学号（' + D.total + ' 名学生）──</option>';
  D.students.forEach(function(s){
    h += '<option value="' + s.sid + '">学号 ' + s.sid + '</option>';
  });
  pickSel.innerHTML = h;
})();
function tryEnter(){
  var sid = pickSel.value;
  if(!sid){ pickGo.disabled = true; return; }
  pickGo.disabled = false;
}
pickSel.addEventListener('change', tryEnter);
pickSel.addEventListener('keydown', function(e){ if(e.key==='Enter') tryEnter(); });
pickGo.addEventListener('click', function(){
  var sid = pickSel.value;
  if(sid) openStuHome(sid);
});
tryEnter();


/* SECTION: stu-home-render */
function openStuHome(sid){
  var s = D.students[byId[sid]];
  if(!s) return;
  document.getElementById('stuHero').innerHTML =
    '<div><div class="nm">'+s.name+'<span class="badge">'+s.level+'</span></div>'+
    '<div class="meta">学号 '+s.sid+' · '+D.cls+' · '+COURSE.title+'</div></div>'+
    '<div style="display:flex;align-items:center;gap:16px">'+
    '<div class="score"><div class="big">'+s.overall+'</div><div class="lab">综合画像分（班级均分 '+D.avg_overall+'）</div></div>'+
    '<button class="repick" id="btnRepick">重新选择学号</button></div>';
  document.getElementById('btnRepick').addEventListener('click', function(){ showView('pick'); });

  // 课程知识体系
  var ch = '<h3>课程知识体系与我的各模块成绩</h3><p style="font-size:12.5px;color:#6b7385;margin:-6px 0 13px">'+COURSE.intro+'</p>';
  COURSE.modules.forEach(function(m){
    ch += '<div class="mod-block"><div class="mh"><h4>'+m.name+'</h4><span class="scale">'+m.scale+'</span></div>'+
          '<div class="md">'+m.desc+'</div>'+
          '<div class="kp-tags">'+m.points.map(function(p){ return '<span>'+p+'</span>'; }).join('')+'</div>'+
          '<div class="mod-score">';
    m.dims.forEach(function(k){
      var my = s.dims[k];
      var cls = D.dim_avgs[k].avg;
      if(my===undefined){
        ch += '<div class="row"><span>'+dimName(k)+'</span><div class="bar"></div><span class="val" style="color:#dc2626">缺测</span></div>';
        return;
      }
      var weak = my<60 ? ' class="weak"' : '';
      var diff = Math.round(my - cls);
      var dt = (diff>=0?'高于':'低于')+'班级均分 '+Math.abs(diff)+' 分';
      ch += '<div class="row"><span>'+dimName(k)+'</span><div class="bar"><i'+weak+' style="width:'+my+'%"></i></div>'+
            '<span class="val">'+my+'<small> / 班级 '+cls+'</small></span></div>';
      ch += '<div class="row"><span style="color:#9aa3b8">班级均分</span><div class="bar cls"><i style="width:'+cls+'%"></i></div>'+
            '<span class="val" style="font-weight:400;color:'+(diff>=0?'#0d9f5f':'#dc2626')+'">'+dt+'</span></div>';
    });
    ch += '</div></div>';
  });
  document.getElementById('courseCard').innerHTML = ch;

  // 我的画像
  var ph = '<h3>我的能力画像</h3>'+radarSVG(s)+'<table class="dim-table">';
  DIM_ORDER.forEach(function(k){
    var v = s.dims[k];
    if(v===undefined){
      ph += '<tr><td>'+dimName(k)+'</td><td class="bar-cell"><span style="color:#b6bdd0">缺测</span></td><td class="pv">—</td></tr>';
      return;
    }
    var weak = v<60 ? ' class="weak"' : '';
    ph += '<tr><td>'+dimName(k)+'<div style="font-size:10.5px;color:#b0b7c8">'+(s.raw[k]||'')+'</div></td>'+
          '<td class="bar-cell"><div class="dt"><i'+weak+' style="width:'+v+'%"></i></div></td><td class="pv">'+v+'</td></tr>';
  });
  ph += '</table>';
  if(s.missing.length){ ph += '<div class="note">未参测科目：'+s.missing.join('、')+'，未纳入画像评分。</div>'; }
  document.getElementById('stuProfileCard').innerHTML = ph;

  // 优势短板（学生端：显示对推荐岗位的影响）
  document.getElementById('stuSwCard').innerHTML = '<h3>我的优势与待加强项</h3>' + renderSW(s, true);

  // 适合我的岗位
  var jh = '<h3>适合我的岗位（点击查看岗位详情与成长轨迹）</h3>';
  jh += '<div class="znotice">'+Z.apply_notice+'</div>';
  s.jobs.forEach(function(j,i){
    var zjs = zqtJobsForOurJob(j.id);
    var cat = zqtCatForOurJob(j.id);
    jh += '<div class="job-item j-clickable" data-jump="'+j.id+'" title="查看岗位详情"><div class="fit"><b>'+Math.round(j.fit)+'</b><span>匹配度</span></div>'+
          '<div style="flex:1"><h4>'+(i===0?'★ ':'')+(i+1)+'. '+j.name+' →</h4><p>'+j.desc+'</p><div class="why">'+j.reason+'</div>';
    // 职前通同类在招职位直达
    if(zjs.length){
      jh += '<div class="zqt-box" style="margin-top:9px"><div class="zh"><span class="badge-zqt">职前通</span>该方向在招职位'+
            '<span class="why">点击直达平台职位详情页</span></div>';
      zjs.forEach(function(x){
        jh += '<div style="margin-bottom:7px">'+
              '<a class="zlink" href="'+x.url+'" target="_blank" rel="noopener" data-nostop="1">'+x.title+' · '+x.salary+'</a>'+
              '<span style="font-size:11px;color:#7a8299">'+x.city+' · '+x.edu+' · '+x.exp+'</span>'+
              '<span class="stage stage-'+x.fit_stage+'" style="margin-left:7px">'+STAGE_NAME[x.fit_stage]+'</span></div>';
      });
      if(cat) jh += '<a class="zlink plain" href="'+cat.zqt_jobs_url+'" target="_blank" rel="noopener" data-nostop="1">在平台检索「'+cat.zqt_category.split(' → ').pop()+'」类全部岗位</a>';
      jh += '</div>';
    }
    jh += '</div></div>';
  });
  document.getElementById('stuJobsCard').innerHTML = jh;

  // 目标岗位能力图谱（对照我的能力）
  renderStuGraph(s);

  // 技能提升规划
  document.getElementById('stuImpCard').innerHTML = '<h3>我的技能提升规划</h3>' + renderImp(s);

  // 面试能力提升
  renderStuInterview(s);

  // 全量岗位库（含方向筛选与搜索）
  var dirs = jobDirectionList();
  var ah = '<h3>全量岗位库（共 '+JOBS.length+' 个岗位 · '+dirs.length+' 大方向）</h3>'+
    '<div class="graph-tools" id="stuJobTools">'+
      '<input type="text" id="sjq" placeholder="搜索岗位名称、技能或方向…" aria-label="搜索岗位">'+
      '<div class="dirbtns"><button class="gtoggle on" data-dir="">全部方向</button>'+
        dirs.map(function(d){
          var c = JOBS.filter(function(j){ return j.direction===d; }).length;
          return '<button class="gtoggle" data-dir="'+esc(d)+'">'+esc(d)+' ('+c+')</button>';
        }).join('')+
      '</div><span class="cnt" id="sjcnt"></span>'+
    '</div><div class="job-grid" id="stuJobGrid"></div>';
  document.getElementById('stuAllJobsCard').innerHTML = ah;
  var sTools = document.getElementById('stuJobTools');
  function refreshStuJobs(){
    var dir = sTools.querySelector('.gtoggle.on').getAttribute('data-dir');
    var kw = document.getElementById('sjq').value.trim();
    var n = renderJobCards(document.getElementById('stuJobGrid'), null, false, dir, kw);
    document.getElementById('sjcnt').textContent = '显示 '+n+' / '+JOBS.length+' 个岗位';
  }
  sTools.querySelectorAll('.gtoggle').forEach(function(b){
    b.addEventListener('click', function(){
      sTools.querySelectorAll('.gtoggle').forEach(function(x){ x.classList.remove('on'); });
      b.classList.add('on');
      refreshStuJobs();
    });
  });
  document.getElementById('sjq').addEventListener('input', refreshStuJobs);
  refreshStuJobs();

  document.getElementById('stuJobsCard').querySelectorAll('.j-clickable').forEach(function(it){
    it.addEventListener('click', function(e){
      // 点击卡片内的职前通链接时不触发岗位弹窗，交由浏览器正常跳转
      if(e.target.closest('a')) return;
      openJob(it.getAttribute('data-jump'));
    });
  });
  showView('stuHome', s.name);
}
