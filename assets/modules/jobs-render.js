/* SECTION: jobs-view */
function jobMatchCount(jid){
  return D.students.filter(function(s){ return s.jobs.some(function(j){ return j.id===jid; }); }).length;
}
function jobTopCount(jid){
  return D.students.filter(function(s){ return s.jobs[0].id===jid; }).length;
}
function jobDirectionList(){
  var ds = [];
  JOBS.forEach(function(j){ if(j.direction && ds.indexOf(j.direction)<0) ds.push(j.direction); });
  return ds;
}
function renderJobCards(container, headEl, withMatch, dirFilter, kw){
  var h = '', n = 0;
  JOBS.forEach(function(j){
    if(dirFilter && j.direction !== dirFilter) return;
    if(kw){
      var hay = (j.name+' '+j.title+' '+j.direction+' '+(j.family||'')+' '+j.desc).toLowerCase();
      if(hay.indexOf(kw.toLowerCase()) < 0) return;
    }
    n++;
    h += '<div class="jcard" data-jid="'+j.id+'" tabindex="0" role="button" aria-label="查看'+j.name+'岗位详情">'+
      '<div class="jdir">'+esc(j.direction||'')+'</div>'+
      '<h4>'+j.name+'</h4><div class="ttl">'+j.title+'</div>'+
      '<p>'+j.desc+'</p>'+
      '<div class="jfoot">'+(withMatch ? '<span class="match">班级匹配 '+jobMatchCount(j.id)+' 人</span>' : '<span class="match"></span>')+'<span class="more">查看详情 →</span></div>'+
      '</div>';
  });
  container.innerHTML = h || '<div class="empty">没有符合条件的岗位</div>';
  container.querySelectorAll('.jcard').forEach(function(c){
    c.addEventListener('click', function(){ openJob(c.getAttribute('data-jid')); });
    bindEnter(c, function(){ openJob(c.getAttribute('data-jid')); });
  });
  return n;
}
(function initTeacherJobs(){
  document.getElementById('jobsHead').innerHTML =
    '<b>岗位库共 '+JOBS.length+' 个 ICT 行业岗位</b>，覆盖数字安防、华为Datacom数通、云计算、大数据、AI人工智能、鸿蒙与终端 6 大方向。"班级匹配人数"按学生画像推荐（TOP3 内命中）统计。点击岗位卡片查看岗位描述、技能要求、成长轨迹与<b>职前通平台同类在招职位</b>。'+
    '<div style="margin-top:9px">'+
      '<a class="zlink" href="'+Z.platform.home+'" target="_blank" rel="noopener">职前通平台首页</a>'+
      '<a class="zlink" href="'+Z.tools.filter(function(t){return t.id==="jobs";})[0].url+'" target="_blank" rel="noopener">平台全部职位（10万+ ICT 岗位）</a>'+
      '<a class="zlink" href="'+Z.tools.filter(function(t){return t.id==="courses";})[0].url+'" target="_blank" rel="noopener">平台全部课程</a>'+
      '<a class="zlink" href="'+Z.tools.filter(function(t){return t.id==="datacom";})[0].url+'" target="_blank" rel="noopener">Datacom 数通方向课程专区</a>'+
    '</div>'+
    '<div style="margin-top:7px;font-size:11.5px;color:#7a8299">深度合作平台：'+Z.platform.name+'（'+Z.platform.operator+'）· '+Z.platform.scale+' · 数据采集时点 '+Z.platform.collected_at+'</div>';

  // 方向筛选 + 关键词搜索
  var dirs = jobDirectionList();
  var tools = document.getElementById('jobTools');
  var th = '<input type="text" id="jq" placeholder="搜索岗位名称、技能或方向…" aria-label="搜索岗位">';
  th += '<div class="dirbtns"><button class="gtoggle on" data-dir="">全部方向 ('+JOBS.length+')</button>';
  dirs.forEach(function(d){
    var c = JOBS.filter(function(j){ return j.direction===d; }).length;
    th += '<button class="gtoggle" data-dir="'+esc(d)+'">'+esc(d)+' ('+c+')</button>';
  });
  th += '</div><span class="cnt" id="jcnt"></span>';
  tools.innerHTML = th;

  function refreshJobs(){
    var dir = tools.querySelector('.gtoggle.on').getAttribute('data-dir');
    var kw = document.getElementById('jq').value.trim();
    var n = renderJobCards(document.getElementById('jobGrid'), null, true, dir, kw);
    document.getElementById('jcnt').textContent = '显示 '+n+' / '+JOBS.length+' 个岗位';
  }
  tools.querySelectorAll('.gtoggle').forEach(function(b){
    b.addEventListener('click', function(){
      tools.querySelectorAll('.gtoggle').forEach(function(x){ x.classList.remove('on'); });
      b.classList.add('on');
      refreshJobs();
    });
  });
  document.getElementById('jq').addEventListener('input', refreshJobs);
  refreshJobs();
})();

function openJob(jid){
  var j = JOBS_BY_ID[jid];
  if(!j) return;
  closeModal(); // 若从学生弹窗跳入，先关闭学生弹窗
  document.getElementById('jNm').textContent = j.name;
  document.getElementById('jMeta').textContent = j.title+' · 班级匹配 '+jobMatchCount(jid)+' 人 · 首推命中 '+jobTopCount(jid)+' 人';
  document.getElementById('jSal').textContent = j.salary;
  var b = document.getElementById('jBody'), h = '';
  h += '<div class="sect-title" style="margin-top:0">岗位描述</div><p style="font-size:13px;color:#3d4558">'+j.desc+'</p>';
  h += '<div class="sect-title">技能要求</div>';
  h += '<div style="font-size:12px;color:#7a8299;margin-bottom:6px">核心技能</div><div class="chips">'+j.skills.core.map(function(x){ return '<span>'+x+'</span>'; }).join('')+'</div>';
  h += '<div style="font-size:12px;color:#7a8299;margin:10px 0 6px">综合素质</div><div class="chips soft">'+j.skills.soft.map(function(x){ return '<span>'+x+'</span>'; }).join('')+'</div>';
  h += '<div class="cert-line"><b>建议考取证书：</b>'+j.cert+'</div>';
  h += '<div class="sect-title">发展与成长轨迹</div><div class="timeline">';
  j.path.forEach(function(p){
    h += '<div class="t-item"><div class="st">'+p.stage+'<span>'+p.role+'</span></div><div class="fc">'+p.focus+'</div></div>';
  });
  h += '</div>';
  h += renderZqtForJob(j.id);
  b.innerHTML = h;
  document.getElementById('jobMask').classList.add('open');
  document.body.style.overflow = 'hidden';
}


/* SECTION: zqt-render */
var STAGE_NAME = {graduate:'应届生可投', target:'1–3年目标岗', advanced:'进阶岗'};
function zqtJobsForOurJob(ourJobId){
  return Z.jobs.filter(function(x){ return (x.match_our_jobs||[]).indexOf(ourJobId) >= 0; });
}
function zqtCatForOurJob(ourJobId){
  for(var i=0;i<Z.job_category_map.length;i++){ if(Z.job_category_map[i].our_job===ourJobId) return Z.job_category_map[i]; }
  return null;
}
// 岗位 → 职前通对接区块（同类在招职位 + 平台职位类别 + 认证课程）
function renderZqtForJob(ourJobId){
  var cat = zqtCatForOurJob(ourJobId);
  var list = zqtJobsForOurJob(ourJobId);
  var h = '<div class="sect-title">职前通平台对接 · 同类在招职位</div>';
  h += '<div class="znotice">'+Z.apply_notice+'</div>';
  if(list.length){
    list.forEach(function(x){
      h += '<div class="zjob"><div class="zl">'+
        '<div class="zt"><a href="'+x.url+'" target="_blank" rel="noopener">'+x.title+' ↗</a></div>'+
        '<div class="zm">'+x.city+' · '+x.edu+' · '+x.exp+(x.cert?' · 证书 '+x.cert:'')+'<br>'+x.company+'</div>';
      if(x.duty) h += '<div class="zd"><b>工作职责：</b>'+x.duty+'</div>';
      if(x.extra) h += '<div class="zd"><b>补充说明：</b>'+x.extra+'</div>';
      h += '</div><div class="zs"><div class="sal">'+x.salary+'</div>'+
           '<div class="stage stage-'+x.fit_stage+'">'+STAGE_NAME[x.fit_stage]+'</div></div></div>';
    });
  } else {
    h += '<div class="note">职前通平台暂无与本岗位直接对应的在招职位，可通过下方职位类别入口在平台内检索最新岗位。</div>';
  }
  if(cat){
    h += '<div class="zqt-box"><div class="zh"><span class="badge-zqt">职前通</span>平台职位类别对应关系</div>'+
      '<div style="font-size:12px;color:#4a5468;line-height:1.8;margin-bottom:8px">'+
      '本岗位对应平台职位类别：<b style="color:#1c2b4f">'+cat.zqt_category+'</b><br>'+
      '平台内可检索的相近职位名称：'+cat.zqt_titles.map(function(t){ return '<b style="color:#4338ca">'+t+'</b>'; }).join('、')+'</div>'+
      '<a class="zlink" href="'+cat.zqt_jobs_url+'" target="_blank" rel="noopener">在平台检索该类岗位</a></div>';
  }
  // 认证 → 课程
  var gj = (typeof GRAPH_JOBS_BY_ID!=='undefined') ? GRAPH_JOBS_BY_ID[ourJobId] : null;
  if(gj && gj.cert_map){
    var ch = '<div class="zqt-box"><div class="zh"><span class="badge-zqt">职前通</span>该岗位对应认证课程</div>';
    var got = [];
    Z.cert_course_map.forEach(function(cc){
      var hit = (gj.cert_map.in_school||[]).concat(gj.cert_map.after_join||[])
        .some(function(n){ return n.indexOf(cc.cert.split('-')[0])>=0 && n.indexOf(cc.cert.split('-').slice(-1)[0])>=0; });
      if(!hit) return;
      var c = zqtCourseById(cc.course_id);
      if(!c) return;
      ch += '<a class="zlink" href="'+c.url+'" target="_blank" rel="noopener">'+c.name+'</a>'+
            '<span style="font-size:11px;color:#9aa3b8;margin-right:10px">'+cc.stage+(c.price?' · '+c.price:'')+'</span>';
      got.push(cc.cert);
    });
    if(!got.length){
      // 回退：给出数通主课程
      var main = zqtCourseById('781');
      if(main) ch += '<a class="zlink" href="'+main.url+'" target="_blank" rel="noopener">'+main.name+'</a>'+
                     '<span style="font-size:11px;color:#9aa3b8;margin-right:10px">在校可考 · '+(main.price||'')+'</span>';
    }
    var exam = Z.tools.filter(function(t){ return t.id==='exam'; })[0];
    if(exam) ch += '<a class="zlink tool" href="'+exam.url+'" target="_blank" rel="noopener">题库训练（配套考试练习）</a>';
    ch += '</div>';
    h += ch;
  }
  return h;
}
function closeJobModal(){
  document.getElementById('jobMask').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('jClose').addEventListener('click', closeJobModal);
document.getElementById('jobMask').addEventListener('click', function(e){ if(e.target===this) closeJobModal(); });


/* SECTION: teacher-view-switch */
var vStu = document.getElementById('viewStudents'), vJob = document.getElementById('viewJobs'), vGraph = document.getElementById('viewGraph');
var bStu = document.getElementById('btnViewStu'), bJob = document.getElementById('btnViewJob'), bGraph = document.getElementById('btnViewGraph');
function switchView(v){
  vStu.style.display = (v==='stu') ? '' : 'none';
  vJob.style.display = (v==='job') ? '' : 'none';
  vGraph.style.display = (v==='graph') ? '' : 'none';
  bStu.classList.toggle('active', v==='stu');
  bJob.classList.toggle('active', v==='job');
  bGraph.classList.toggle('active', v==='graph');
  window.scrollTo(0,0);
}
bStu.addEventListener('click', function(){ switchView('stu'); });
bJob.addEventListener('click', function(){ switchView('job'); });
bGraph.addEventListener('click', function(){ switchView('graph'); });
