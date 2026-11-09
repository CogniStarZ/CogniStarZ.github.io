/* SECTION: sw-render */
function renderSW(s, withJobNote){
  var gs = s.strengths.map(function(x){
    return '<div class="item"><b>'+x.dim+'（'+x.score+'分）</b><div class="d">'+(x.desc||'')+'</div></div>';
  }).join('');
  var bs = s.weaknesses.map(function(x){
    var h = '<div class="item"><b>'+x.dim+'（'+x.score+'分）</b><div class="d">'+(x.desc||'')+'</div>';
    if(withJobNote && x.jobImpact){
      h += '<div class="ji"><b>对从事"'+(x.job||'推荐岗位')+'"的影响</b>'+x.jobImpact+'</div>';
    }
    return h+'</div>';
  }).join('');
  return '<div class="sw">'+
    '<div class="box good"><b>✦ 优势项</b>'+gs+'</div>'+
    '<div class="box bad"><b>▽ 待加强</b>'+bs+'</div></div>';
}

/* SECTION: imp-render */
// 维度中文名 → d 编码（用于反查职前通课程映射）
var DIM_CODE_BY_NAME = {};
(function(){ for(var k in GRAPH.dim_dict) DIM_CODE_BY_NAME[GRAPH.dim_dict[k]] = k; })();
function zqtCourseById(id){
  for(var i=0;i<Z.courses.length;i++){ if(Z.courses[i].id===id) return Z.courses[i]; }
  return null;
}
// 按能力维度生成职前通课程跳转区块
function renderZqtCourse(dimName){
  var dk = DIM_CODE_BY_NAME[dimName];
  if(!dk) return '';
  var m = Z.dim_course_map[dk];
  if(!m) return '';
  var c = zqtCourseById(m.course_id);
  if(!c) return '';
  var h = '<div class="zqt-box"><div class="zh"><span class="badge-zqt">职前通</span>'+
          '本维度对应课程章节'+
          '<span class="why">依据《'+c.name+'》真实课程目录匹配</span></div>';
  h += '<div class="chaps" style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:7px">'+
       m.chapters.map(function(x){ return '<span style="font-size:11px;background:#fff;border:1px solid #dfe5f3;border-radius:5px;padding:2px 8px;color:#4a5468">'+x+'</span>'; }).join('')+
       '</div>';
  h += '<div style="font-size:11.5px;color:#4338ca;line-height:1.6;margin-bottom:8px"><b>学习重点：</b>'+m.focus+'</div>';
  h += '<a class="zlink" href="'+c.url+'" target="_blank" rel="noopener">打开课程：'+c.name+'</a>';
  h += '<span style="font-size:11px;color:#9aa3b8">'+(c.level||'')+(c.hours?' · '+c.hours:'')+(c.price?' · '+c.price:'')+'</span>';
  h += '</div>';
  return h;
}
function renderImp(s){
  var h = '';
  s.improve.forEach(function(imp){
    var steps = (imp.plan||[]).map(function(p,i){
      return '<div class="step"><span class="no">'+(i+1)+'</span><span>'+p+'</span></div>';
    }).join('');
    var links = (imp.res||[]).map(function(r){
      return '<a href="'+r.url+'" target="_blank" rel="noopener">'+r.name+'</a>';
    }).join('');
    h += '<div class="imp-item"><span class="dim-tag">'+imp.dim+'</span><span class="sc">当前 '+imp.score+' 分 · 依据'+imp.src+'</span>'+
         '<div class="plan">'+steps+'</div>'+
         '<div class="res"><b>在线学习资源：</b>'+links+'</div>'+
         renderZqtCourse(imp.dim)+'</div>';
  });
  return h;
}


/* SECTION: teacher-dashboard */
(function renderDash(){
  var lvCnt = D.level_counts;
  var lvTxt = D.levels.map(function(l){ return l+' '+(lvCnt[l]||0)+'人'; }).join(' · ');
  document.getElementById('statRow').innerHTML =
    '<div class="stat" style="--c:#3b5bdb"><div class="k">学生总数</div><div class="v">'+D.total+'</div><div class="u">'+D.cls+'</div></div>'+
    '<div class="stat" style="--c:#6366f1"><div class="k">班级综合能力均分</div><div class="v">'+D.avg_overall+'</div><div class="u">百分制 · 六维加权</div></div>'+
    '<div class="stat" style="--c:#0d9f5f"><div class="k">卓越 / 良好人数</div><div class="v">'+(lvCnt['卓越']||0)+' / '+(lvCnt['良好']||0)+'</div><div class="u">'+lvTxt+'</div></div>'+
    '<div class="stat" style="--c:#f59e0b"><div class="k">最薄弱维度（班级）</div><div class="v" style="font-size:17px;padding-top:5px">'+weakestDim()+'</div><div class="u">重点提升方向</div></div>';

  var dimBox = document.getElementById('dimAvgBox');
  var h = '';
  DIM_ORDER.forEach(function(k){
    var d = D.dim_avgs[k];
    h += '<div class="hbar"><div class="lab"><span>'+d.name+'</span><b>'+d.avg+'</b></div>'+
         '<div class="track"><div class="fill" style="width:'+d.avg+'%"></div></div></div>';
  });
  dimBox.innerHTML = h;

  var jbBox = document.getElementById('jobDistBox');
  var pairs = [];
  for (var jn in D.job_counts) pairs.push([jn, D.job_counts[jn]]);
  pairs.sort(function(a,b){ return b[1]-a[1]; });
  var mx = pairs.length ? pairs[0][1] : 1;
  h = '';
  pairs.forEach(function(p){
    h += '<div class="hbar"><div class="lab"><span>'+p[0]+'</span><b>'+p[1]+'人</b></div>'+
         '<div class="track"><div class="fill" style="width:'+(p[1]/mx*100)+'%"></div></div></div>';
  });
  jbBox.innerHTML = h;

  var leg = '';
  D.levels.forEach(function(l){
    leg += '<span><i style="background:'+LV_COLORS[l]+'"></i>'+l+' '+(lvCnt[l]||0)+'人</span>';
  });
  document.getElementById('lvLegend').innerHTML = leg;
  var lvBox = document.getElementById('lvBox');
  h = '';
  D.levels.forEach(function(l){
    var c = lvCnt[l]||0;
    h += '<div class="hbar"><div class="lab"><span>'+l+'</span><b>'+c+'人（'+(c/D.total*100).toFixed(1)+'%）</b></div>'+
         '<div class="track"><div class="fill" style="width:'+(c/D.total*100)+'%;background:'+LV_COLORS[l]+'"></div></div></div>';
  });
  lvBox.innerHTML = h;
})();
function weakestDim(){
  var wk = DIM_ORDER[0];
  DIM_ORDER.forEach(function(k){ if(D.dim_avgs[k].avg < D.dim_avgs[wk].avg) wk = k; });
  return D.dim_avgs[wk].name+' '+D.dim_avgs[wk].avg;
}


/* SECTION: teacher-filters */
var qEl = document.getElementById('q'), lvEl = document.getElementById('lv'), jbEl = document.getElementById('jb');
lvEl.innerHTML = '<option value="">全部等级</option>' + D.levels.map(function(l){ return '<option>'+l+'</option>'; }).join('');
var jbSet = [];
for (var jn2 in D.job_counts) jbSet.push(jn2);
jbSet.sort();
jbEl.innerHTML = '<option value="">全部岗位方向</option>' + jbSet.map(function(j){ return '<option>'+j+'</option>'; }).join('');
function filtered(){
  var q = qEl.value.trim().toLowerCase(), lvv = lvEl.value, jv = jbEl.value;
  return D.students.filter(function(s){
    return (!q || s.name.toLowerCase().indexOf(q)>=0 || s.sid.indexOf(q)>=0) &&
           (!lvv || s.level===lvv) &&
           (!jv || s.jobs.some(function(j){ return j.name===jv; }));
  });
}


/* SECTION: teacher-grid */
function renderGrid(){
  var list = filtered();
  var g = document.getElementById('grid');
  document.getElementById('cnt').textContent = '显示 '+list.length+' / '+D.total+' 名学生';
  document.getElementById('empty').style.display = list.length ? 'none' : 'block';
  var h = '';
  list.forEach(function(s){
    var bars = '';
    DIM_ORDER.forEach(function(k){
      if(s.dims[k]===undefined){ bars += '<div class="mb" title="缺测"></div>'; return; }
      var weak = s.dims[k] < 60 ? ' weak' : '';
      bars += '<div class="mb'+weak+'" title="'+dimName(k)+' '+s.dims[k]+'分"><i style="height:'+s.dims[k]+'%"></i></div>';
    });
    h += '<div class="scard" data-sid="'+s.sid+'" tabindex="0" role="button" aria-label="查看'+s.name+'的能力画像">'+
      '<div class="top"><div><div class="nm">'+s.name+'</div><div class="id">学号 '+s.sid+'</div></div>'+
      '<span class="badge lv-'+s.level+'">'+s.level+'</span></div>'+
      '<div class="score-line"><span class="big">'+s.overall+'</span><span class="of">/ 100 综合画像分</span></div>'+
      '<div class="mini-bars">'+bars+'</div>'+
      '<div class="job-lab">首推岗位（点击查看岗位详情）</div><span class="job-chip" data-jump="'+s.jobs[0].id+'" title="查看'+s.jobs[0].name+'岗位详情">'+s.jobs[0].name+'</span>'+
      '</div>';
  });
  g.innerHTML = h;
  g.querySelectorAll('.scard').forEach(function(c){
    c.addEventListener('click', function(e){
      var chip = e.target.closest('[data-jump]');
      if(chip){ e.stopPropagation(); openJob(chip.getAttribute('data-jump')); return; }
      openModal(c.getAttribute('data-sid'));
    });
    bindEnter(c, function(){ openModal(c.getAttribute('data-sid')); });
  });
}
qEl.addEventListener('input', renderGrid);
lvEl.addEventListener('change', renderGrid);
jbEl.addEventListener('change', renderGrid);
renderGrid();


/* SECTION: teacher-modal */
function openModal(sid){
  var s = D.students[byId[sid]];
  if(!s) return;
  document.getElementById('mNm').textContent = s.name;
  document.getElementById('mMeta').textContent = '学号 '+s.sid+' · 综合画像分 '+s.overall+' · '+s.level;
  var b = document.getElementById('mBody');
  var h = '<div class="m-grid"><div>';
  h += '<div class="sect-title" style="margin-top:0">能力雷达图</div>';
  h += radarSVG(s);
  h += '<div class="sect-title">六维成绩明细</div><table class="dim-table">';
  DIM_ORDER.forEach(function(k){
    var v = s.dims[k];
    if(v===undefined){
      h += '<tr><td>'+dimName(k)+'</td><td class="bar-cell"><span style="color:#b6bdd0">缺测</span></td><td class="pv">—</td></tr>';
      return;
    }
    var weak = v<60 ? ' class="weak"' : '';
    h += '<tr><td>'+dimName(k)+'<div style="font-size:10.5px;color:#b0b7c8">'+(s.raw[k]||'')+'</div></td>'+
         '<td class="bar-cell"><div class="dt"><i'+weak+' style="width:'+v+'%"></i></div></td>'+
         '<td class="pv">'+v+'</td></tr>';
  });
  h += '</table>';
  if(s.missing.length){ h += '<div class="note">未参测科目：'+s.missing.join('、')+'，该部分能力未纳入画像评分。</div>'; }
  h += '</div><div>';
  h += '<div class="sect-title" style="margin-top:0">推荐岗位 TOP3</div>';
  s.jobs.forEach(function(j,i){
    h += '<div class="job-item j-clickable" data-jump="'+j.id+'" title="查看岗位详情"><div class="fit"><b>'+Math.round(j.fit)+'</b><span>匹配度</span></div>'+
         '<div><h4>'+(i+1)+'. '+j.name+' →</h4><p>'+j.desc+'</p><div class="why">'+j.reason+'</div></div></div>';
  });
  h += '<div class="sect-title">优势与短板</div>'+renderSW(s, false);
  h += '<div class="sect-title">技能提升规划</div>'+renderImp(s);
  h += '</div></div>';
  b.innerHTML = h;
  b.querySelectorAll('.j-clickable').forEach(function(it){
    it.addEventListener('click', function(){ openJob(it.getAttribute('data-jump')); });
  });
  document.getElementById('mask').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  document.getElementById('mask').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('mClose').addEventListener('click', closeModal);
document.getElementById('mask').addEventListener('click', function(e){ if(e.target===this) closeModal(); });
