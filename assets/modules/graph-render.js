/* SECTION: graph-render */
var GRAPH_JOBS_BY_ID = {};
GRAPH.jobs.forEach(function(j){ GRAPH_JOBS_BY_ID[j.job_id] = j; });
var SRC_NAME = {course:'课程知识点', cert:'认证大纲', industry:'行业岗位要求'};

function graphTagCount(){
  var n = 0;
  GRAPH.jobs.forEach(function(j){ n += j.core_tags.length + j.plus_tags.length; });
  return n;
}
function graphCoreCount(){
  var n = 0;
  GRAPH.jobs.forEach(function(j){ n += j.core_tags.length; });
  return n;
}
function activeDirs(){ return GRAPH.directions.filter(function(d){ return d.status==='active'; }).length; }
function activeFams(){ return GRAPH.families.filter(function(f){ return f.status==='active'; }).length; }

function renderGraphView(){
  document.getElementById('graphHead').innerHTML =
    '<b>ICT 垂直行业岗位能力图谱</b>'+
    ' · 覆盖 <b>'+GRAPH.jobs.length+'</b> 个岗位、<b>'+graphTagCount()+'</b> 个技能标签（核心 '+graphCoreCount()+' 个）'+
    ' · <b>'+activeDirs()+'</b> 大行业方向、<b>'+activeFams()+'</b> 个岗位族'+
    '<div style="margin-top:7px;color:#7a8299">四层结构：行业方向 → 岗位族 → 具体岗位 → 技能标签（带权重，映射到能力维度）。技能标签来源包括课程知识点映射、华为认证大纲与行业通用岗位要求。</div>';

  // 四层结构
  var lh = '<div class="glayers">';
  GRAPH.layers.forEach(function(L, i){
    var cls = 'g'+(i+1);
    var chips = '';
    if(L.no===1){
      chips = GRAPH.directions.map(function(d){
        return '<span class="gchip '+(d.status==='active'?'done':'plan')+'">'+d.name+(d.status==='active'?' ✓':' 规划中')+'</span>';
      }).join('');
    } else if(L.no===2){
      chips = GRAPH.families.map(function(f){
        return '<span class="gchip '+(f.status==='active'?'done':'plan')+'">'+f.name+'</span>';
      }).join('');
    } else if(L.no===3){
      chips = GRAPH.jobs.slice(0,24).map(function(j){ return '<span class="gchip done">'+esc(j.name)+'</span>'; }).join('') +
              '<span class="gchip plan">… 共 '+GRAPH.jobs.length+' 个岗位</span>';
    } else {
      var sample = [];
      GRAPH.jobs.forEach(function(j){ j.core_tags.slice(0,2).forEach(function(t){ if(sample.indexOf(t.tag)<0) sample.push(t.tag); }); });
      chips = sample.slice(0,10).map(function(t){ return '<span class="gchip">'+esc(t)+'</span>'; }).join('') +
              '<span class="gchip plan">… 共 '+graphTagCount()+' 个技能标签</span>';
    }
    lh += '<div class="gband '+cls+'"><div class="gh"><span class="gt">第'+L.no+'层</span><h4>'+L.name+'</h4><span class="cnt">'+L.desc+'</span></div><div class="gchips">'+chips+'</div></div>';
    if(i < GRAPH.layers.length-1) lh += '<div class="gdown">▼</div>';
  });
  lh += '</div>';
  document.getElementById('graphLayers').innerHTML = lh;

  // 行业方向
  var dh = '';
  GRAPH.directions.forEach(function(d){
    dh += '<div class="fam-row"><div class="fn">'+d.name+
          '<span class="st-pill '+(d.status==='active'?'st-active':'st-plan')+'">'+(d.status==='active'?'已构建':'规划中')+'</span>'+
          '<span>'+d.job_count+' 个岗位</span></div>'+
          '<div class="fj">'+d.note+'<br><span style="color:#9aa3b8">关联岗位族：'+d.families.join(' / ')+'</span></div></div>';
  });
  document.getElementById('graphDirs').innerHTML = dh;

  // 岗位族
  var fh = '';
  GRAPH.families.forEach(function(f){
    var names = f.jobs.map(function(jid){ return GRAPH_JOBS_BY_ID[jid] ? GRAPH_JOBS_BY_ID[jid].name : jid; });
    fh += '<div class="fam-row"><div class="fn">'+f.name+
          '<span class="st-pill '+(f.status==='active'?'st-active':'st-plan')+'">'+(f.status==='active'?'已构建':'规划中')+'</span>'+
          '<span>'+f.direction+'</span></div>'+
          '<div class="fj">'+f.desc+'<br>'+(names.length ? '<b style="color:#4338ca">'+names.join(' · ')+'</b>' : '<span style="color:#9aa3b8">待接入企业 JD 后填充岗位</span>')+'</div></div>';
  });
  document.getElementById('graphFams').innerHTML = fh;

  // 岗位技能标签（含工具条）
  document.getElementById('graphTools').innerHTML =
    '<input type="text" id="gq" placeholder="搜索岗位或技能标签…" aria-label="搜索图谱">'+
    '<select id="gdim" aria-label="按能力维度筛选"></select>'+
    '<select id="gfam" aria-label="按岗位族筛选"></select>'+
    '<button class="gtoggle on" id="gOnlyMine">仅看与本班学生相关的岗位</button>'+
    '<span class="cnt" id="gcnt"></span>';
  var ds = '<option value="">全部能力维度</option>';
  GRAPH_DIM_ORDER.forEach(function(k){
    ds += '<option value="'+k+'">'+esc(GRAPH.dim_dict[k])+'</option>';
  });
  document.getElementById('gdim').innerHTML = ds;
  var fams = [];
  GRAPH.jobs.forEach(function(j){ if(fams.indexOf(j.family)<0) fams.push(j.family); });
  var fs = '<option value="">全部岗位族</option>';
  fams.forEach(function(f){ fs += '<option>'+f+'</option>'; });
  document.getElementById('gfam').innerHTML = fs;

  document.getElementById('gq').addEventListener('input', renderGraphJobs);
  document.getElementById('gdim').addEventListener('change', renderGraphJobs);
  document.getElementById('gfam').addEventListener('change', renderGraphJobs);
  document.getElementById('gOnlyMine').addEventListener('click', function(){
    this.classList.toggle('on');
    renderGraphJobs();
  });
  renderGraphJobs();

  // 维度扩展建议
  var eh = '';
  GRAPH.extended_dims_suggestion.forEach(function(x){
    eh += '<div class="ext-item"><b>'+x.tag+'</b>'+x.reason+'</div>';
  });
  document.getElementById('graphExt').innerHTML = eh || '<div class="ext-item">暂无扩展建议</div>';

  // 更新机制
  var uh = '';
  GRAPH.update_mechanism.forEach(function(u){
    uh += '<div class="upd-item"><span class="ut">'+u.type+'</span><span>'+u.desc+'</span></div>';
  });
  document.getElementById('graphUpd').innerHTML = uh;
}

function renderGraphJobs(){
  var qEl = document.getElementById('gq');
  if(!qEl) return;
  var q = qEl.value.trim().toLowerCase();
  var dv = document.getElementById('gdim').value;
  var fv = document.getElementById('gfam').value;
  var onlyMine = document.getElementById('gOnlyMine').classList.contains('on');
  // 本班学生 TOP3 推荐命中过的岗位
  var mineIds = {};
  D.students.forEach(function(s){ s.jobs.forEach(function(j){ mineIds[j.id] = true; }); });

  var list = GRAPH.jobs.filter(function(j){
    if(onlyMine && !mineIds[j.job_id]) return false;
    if(fv && j.family !== fv) return false;
    if(dv && !j.dim_weights[dv]) return false;
    if(q){
      var hay = (j.name + ' ' + j.family + ' ' + j.direction + ' ' +
                 j.core_tags.map(function(t){ return t.tag; }).join(' ') + ' ' +
                 j.plus_tags.map(function(t){ return t.tag; }).join(' ')).toLowerCase();
      if(hay.indexOf(q) < 0) return false;
    }
    return true;
  });
  document.getElementById('gcnt').textContent = '显示 '+list.length+' / '+GRAPH.jobs.length+' 个岗位';

  var box = document.getElementById('graphJobs');
  if(!list.length){
    box.innerHTML = '<div class="empty">没有匹配的岗位，换个关键词或取消筛选试试</div>';
    return;
  }
  var h = '';
  list.forEach(function(j){
    var wsum = 0;
    for(var k in j.dim_weights) wsum += j.dim_weights[k];
    var wrows = '';
    GRAPH_DIM_ORDER.forEach(function(k){
      if(j.dim_weights[k] === undefined) return;
      var pctv = Math.round(j.dim_weights[k] / (wsum||1) * 100);
      var ext = GRAPH_ASSESSED.indexOf(k) < 0;
      wrows += '<div class="wrow"><span>'+esc(GRAPH.dim_dict[k])+(ext?'<b class="extdim">扩维</b>':'')+'</span>'+
               '<div class="wb"><i style="width:'+pctv+'%'+(ext?';background:#c084fc':'')+'"></i></div>'+
               '<span class="wv">'+(j.dim_weights[k]*100).toFixed(0)+'%</span></div>';
    });
    var cores = j.core_tags.map(function(t){
      var dms = (t.dim||[]).map(function(d){ return GRAPH.dim_dict[d]; }).join('/') || '扩展维度';
      return '<span class="tag core" title="权重 '+(t.weight*100).toFixed(0)+'% · 要求程度 '+t.level+' · 来源 '+SRC_NAME[t.source]+'">'+
             t.tag+'<span class="dm">'+dms+'</span></span>';
    }).join('');
    var plus = j.plus_tags.map(function(t){
      var dms = (t.dim||[]).map(function(d){ return GRAPH.dim_dict[d]; }).join('/') || '非技术维度';
      return '<span class="tag plus" title="加分项 · 来源 '+SRC_NAME[t.source]+(t.note?' · '+t.note:'')+'">'+t.tag+'<span class="dm">'+dms+'</span></span>';
    }).join('');
    h += '<div class="gjob">'+
      '<div class="gjh"><h4 data-gjid="'+j.job_id+'" title="查看岗位详情">'+j.name+' →</h4>'+
      '<span class="path">'+j.direction+' / '+j.family+'</span>'+
      '<span class="tags-n">核心标签 '+j.core_tags.length+' · 加分 '+j.plus_tags.length+'</span></div>'+
      '<div style="font-size:11.5px;color:#9aa3b8;margin-bottom:8px">能力维度权重（A4 匹配计算依据，合计 100%）</div>'+
      wrows+
      '<div style="font-size:11.5px;color:#7a8299;margin:11px 0 4px">核心技能标签（悬停查看权重与来源）</div>'+
      '<div class="tagline">'+cores+'</div>'+
      '<div style="font-size:11.5px;color:#7a8299;margin:9px 0 4px">加分项标签</div>'+
      '<div class="tagline">'+plus+'</div>'+
      '<div class="cert-line"><b>认证映射：</b>在校可考 '+j.cert_map.in_school.join('、')+
        ' ｜ 入职后进阶 '+j.cert_map.after_join.join('、')+'</div>'+
      '<div class="cert-line" style="margin-top:7px"><b>课程映射：</b>'+j.course_map.join('、')+'</div>'+
      '<div class="src-legend">JD 依据：'+j.jd_basis+'</div>'+
      '</div>';
  });
  h += '<div class="src-legend" style="margin-top:11px">标签来源图例：课程知识点（本校课程实测可支撑） · 认证大纲（华为认证体系要求） · 行业岗位要求（企业 JD 通用要求）｜'+
       '标签颜色：<span class="tag core" style="padding:1px 7px">核心技能</span> <span class="tag plus" style="padding:1px 7px">加分项</span></div>';
  box.innerHTML = h;
  box.querySelectorAll('[data-gjid]').forEach(function(el){
    el.addEventListener('click', function(){ openJob(el.getAttribute('data-gjid')); });
  });
}
renderGraphView();

/* SECTION: stu-graph-render */
// 岗位期望分：与 A4 匹配规则一致（权重≥.30→85，.20-.29→75，<.20→65）
function requiredOf(w){ return w >= 0.30 ? 85 : (w >= 0.20 ? 75 : 65); }
function renderStuGraph(s){
  var top = s.jobs[0];
  var gj = GRAPH_JOBS_BY_ID[top.id];
  var h = '<h3>目标岗位能力图谱 · '+top.name+'</h3>';
  if(!gj){
    document.getElementById('stuGraphCard').innerHTML = h + '<div class="note">该岗位暂未纳入能力图谱，可查看下方全量岗位库了解岗位要求。</div>';
    return;
  }
  h += '<p style="font-size:12.5px;color:#6b7385;margin:-6px 0 13px">'+
       '图谱路径：'+gj.direction+' → '+gj.family+' → <b style="color:#22304e">'+gj.name+'</b>。'+
       '下面把这个岗位真实要求的技能标签，逐项对照你当前的能力分数，绿色是你已具备的优势、红色是需要补强的缺口。</p>';

  // 维度对照：岗位要求 vs 我的分数
  var wsum = 0;
  for(var k in gj.dim_weights) wsum += gj.dim_weights[k];
  h += '<div class="sect-title" style="margin-top:4px">能力维度对照（岗位权重 → 期望分 vs 我的得分）</div>';
  DIM_ORDER.forEach(function(k){
    if(gj.dim_weights[k] === undefined) return;
    var w = gj.dim_weights[k];
    var req = requiredOf(w);
    var my = s.dims[k];
    var pctv = Math.round(w / (wsum||1) * 100);
    var gap = (my === undefined) ? null : Math.round((req - my) * 10) / 10;
    var st, col;
    if(my === undefined){ st = '缺测'; col = '#8b93ad'; }
    else if(gap <= 0){ st = '已达标 +' + Math.abs(gap); col = '#0d9f5f'; }
    else if(gap <= 10){ st = '小幅差距 −' + gap; col = '#d97706'; }
    else if(gap <= 25){ st = '明显差距 −' + gap; col = '#ea580c'; }
    else { st = '重大差距 −' + gap; col = '#dc2626'; }
    var barCol = (my === undefined) ? '#cbd5e1' : (gap <= 0 ? 'linear-gradient(90deg,#0d9f5f,#34d399)' : 'linear-gradient(90deg,#f59e0b,#ef4444)');
    h += '<div style="margin-bottom:10px">'+
      '<div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:3px;flex-wrap:wrap;gap:6px">'+
        '<span style="color:#22304e;font-weight:600">'+GRAPH.dim_dict[k]+
          '<span style="font-weight:400;color:#9aa3b8"> · 岗位权重 '+(w*100).toFixed(0)+'%（'+pctv+'%）· 期望 '+req+' 分</span></span>'+
        '<span style="color:'+col+';font-weight:700">'+(my===undefined?'缺测':my+' 分')+' · '+st+'</span>'+
      '</div>'+
      '<div style="position:relative;height:9px;background:#eef1f8;border-radius:5px;overflow:hidden">'+
        '<div style="position:absolute;left:0;top:0;bottom:0;width:'+(my===undefined?0:my)+'%;background:'+barCol+';border-radius:5px"></div>'+
        '<div style="position:absolute;left:'+req+'%;top:-2px;bottom:-2px;width:2px;background:#1c2b4f" title="岗位期望线 '+req+' 分"></div>'+
      '</div></div>';
  });
  h += '<div class="src-legend">竖线为岗位期望分界线（按权重档位设定：核心要求≥30%→85分，重要要求20–29%→75分，基本要求<20%→65分）</div>';

  // 技能标签对照
  function tagCls(t){
    var dms = t.dim || [];
    var hasStrong = dms.some(function(d){ return s.dims[d] !== undefined && s.dims[d] >= 75; });
    var hasGap = dms.some(function(d){ return s.dims[d] !== undefined && s.dims[d] < 60; });
    if(hasGap) return 'tag core gapm';
    if(hasStrong) return 'tag core mine';
    return 'tag core';
  }
  function tagNote(t){
    var dms = t.dim || [];
    if(!dms.length) return '超出现有六维能力范围';
    var parts = dms.map(function(d){
      var v = s.dims[d];
      return GRAPH.dim_dict[d] + (v===undefined?'（缺测）':'（'+v+'分）');
    });
    return '关联维度：' + parts.join('、') + ' · 要求程度 ' + t.level + ' · 来源 ' + SRC_NAME[t.source];
  }
  h += '<div class="sect-title">岗位核心技能标签 × 我的掌握情况</div>';
  h += '<div class="tagline">' + gj.core_tags.map(function(t){
        return '<span class="'+tagCls(t)+'" title="'+tagNote(t)+'">'+t.tag+
               '<span class="dm">'+(t.weight*100).toFixed(0)+'%</span></span>';
      }).join('') + '</div>';
  if(gj.plus_tags.length){
    h += '<div style="font-size:11.5px;color:#7a8299;margin:9px 0 4px">加分项（非必需，具备可提高竞争力）</div>';
    h += '<div class="tagline">' + gj.plus_tags.map(function(t){
          return '<span class="tag plus" title="'+tagNote(t)+'">'+t.tag+'</span>';
        }).join('') + '</div>';
  }
  h += '<div class="src-legend">标签底色：<span class="tag core mine" style="padding:1px 7px">我已具备优势</span> '+
       '<span class="tag core gapm" style="padding:1px 7px">我的能力缺口</span> '+
       '<span class="tag core" style="padding:1px 7px">基本达标</span> · 悬停标签可查看关联维度与得分</div>';

  // 认证与课程映射
  var gotCerts = (s.cert_summary||[]).map(function(c){ return c.name; });
  function certMark(arr){
    return arr.map(function(c){
      var got = gotCerts.indexOf(c) >= 0;
      return '<span class="tag '+(got?'mine':'plus')+'" style="margin:0 5px 5px 0">'+c+(got?' ✓已取得':'')+'</span>';
    }).join('');
  }
  h += '<div class="sect-title">认证与课程映射</div>';
  h += '<div style="font-size:12px;color:#7a8299;margin-bottom:5px">在校期间可考</div><div class="tagline">'+(certMark(gj.cert_map.in_school)||'<span class="tag">—</span>')+'</div>';
  h += '<div style="font-size:12px;color:#7a8299;margin:8px 0 5px">入职后进阶</div><div class="tagline">'+(certMark(gj.cert_map.after_join)||'<span class="tag">—</span>')+'</div>';
  h += '<div class="cert-line" style="margin-top:9px"><b>对应本校课程：</b>'+gj.course_map.join('、')+'</div>';

  // 职前通认证课程直达
  var certCourses = [];
  Z.cert_course_map.forEach(function(cc){
    var match = gj.cert_map.in_school.concat(gj.cert_map.after_join).some(function(n){
      return n.indexOf(cc.cert.split('-')[0]) >= 0;
    });
    if(!match) return;
    var c = zqtCourseById(cc.course_id);
    if(!c) return;
    certCourses.push({cert:cc.cert, stage:cc.stage, course:c});
  });
  if(certCourses.length){
    h += '<div class="zqt-box" style="margin-top:11px"><div class="zh"><span class="badge-zqt">职前通</span>'+
         '认证备考课程直达<span class="why">点击课程名直达职前通课程详情页</span></div>';
    certCourses.forEach(function(x){
      h += '<div class="zcourse">'+
           '<div class="ct"><a href="'+x.course.url+'" target="_blank" rel="noopener">'+x.course.name+' ↗</a></div>'+
           '<div class="cm">'+x.stage+(x.course.hours?' · '+x.course.hours:'')+(x.course.price?' · '+x.course.price:'')+(x.course.rating?' · 评分 '+x.course.rating:'')+'</div>'+
           '<div class="cf"><b>对应认证：</b>'+x.cert+'</div>'+
           '</div>';
    });
    h += '</div>';
  }

  h += '<div class="note">岗位能力图谱由 A3 智能体基于企业真实用人 JD 构建，覆盖 '+GRAPH.jobs.length+
       ' 个岗位、'+graphTagCount()+' 个技能标签。教师端「能力图谱」页可查看完整四层图谱结构与全部岗位标签。</div>';

  document.getElementById('stuGraphCard').innerHTML = h;
}
