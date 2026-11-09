/* SECTION: stu-interview-render */
function renderStuInterview(s){
  var top = s.jobs[0];
  var weakDims = s.weaknesses.map(function(x){
    return DIM_ORDER.filter(function(k){ return GRAPH.dim_dict[k] === x.dim; })[0];
  }).filter(Boolean);
  var strongDims = s.strengths.map(function(x){
    return DIM_ORDER.filter(function(k){ return GRAPH.dim_dict[k] === x.dim; })[0];
  }).filter(Boolean);

  // 依据真实画像动态组卷
  var paper = [];
  function addQ(type, dimKey, qobj, note){
    paper.push({type:type, dim:dimKey, dimName:dimKey?GRAPH.dim_dict[dimKey]:null, q:qobj, note:note||null});
  }
  // T1 技术深度题：取自优势维度（验证真实掌握度）
  strongDims.forEach(function(dk){
    var b = IV.bank[dk];
    if(b && b.T1 && b.T1.length) addQ('T1', dk, b.T1[0]);
  });
  // 若优势维度不足2个，从其他高分维度补
  if(paper.filter(function(p){return p.type==='T1';}).length < 2){
    DIM_ORDER.forEach(function(dk){
      if(paper.filter(function(p){return p.type==='T1';}).length >= 2) return;
      if(strongDims.indexOf(dk) >= 0) return;
      var b = IV.bank[dk];
      if(b && b.T1 && b.T1.length && s.dims[dk] !== undefined && s.dims[dk] >= 70) addQ('T1', dk, b.T1[0]);
    });
  }
  // T2 项目追问题：本校学生共同完成的综合实训
  IV.project_questions.forEach(function(q){ addQ('T2', null, q, '基于你在数字安防网络综合实训中的真实经历'); });
  // T3 短板压力题：取自短板维度（最高优先级）
  weakDims.forEach(function(dk){
    var b = IV.bank[dk];
    if(b && b.T3 && b.T3.length) addQ('T3', dk, b.T3[0]);
    else if(b && b.T1 && b.T1.length) addQ('T3', dk, b.T1[b.T1.length-1]);
  });
  // 补充：班级整体最弱维度也作为压力题（若未覆盖）
  var clsWeak = DIM_ORDER.slice().sort(function(a,b){ return D.dim_avgs[a].avg - D.dim_avgs[b].avg; })[0];
  if(weakDims.indexOf(clsWeak) < 0 && IV.bank[clsWeak] && IV.bank[clsWeak].T3 && IV.bank[clsWeak].T3.length){
    addQ('T3', clsWeak, IV.bank[clsWeak].T3[0], '班级整体最薄弱维度（均分 '+D.dim_avgs[clsWeak].avg+'），面试中大概率被问到');
  }
  // T1 补充：岗位核心权重维度但非优势项
  var gj = GRAPH_JOBS_BY_ID[top.id];
  if(gj){
    var topDims = DIM_ORDER.filter(function(k){ return gj.dim_weights[k] !== undefined; })
      .sort(function(a,b){ return gj.dim_weights[b] - gj.dim_weights[a]; });
    topDims.forEach(function(dk){
      if(paper.filter(function(p){return p.type==='T1';}).length >= 3) return;
      if(paper.some(function(p){ return p.dim === dk && p.type === 'T1'; })) return;
      var b = IV.bank[dk];
      if(b && b.T1 && b.T1.length) addQ('T1', dk, b.T1[0], '该岗位权重最高的能力维度之一（'+(gj.dim_weights[dk]*100).toFixed(0)+'%）');
    });
  }
  // T4 情景应变题：按首推岗位
  var sc = IV.scenario_questions[top.id] || IV.scenario_questions['sec-net'] || [];
  sc.slice(0,2).forEach(function(q){ addQ('T4', null, q, '针对「'+top.name+'」岗位的真实工作场景'); });
  // T5 HR素质题
  IV.hr_questions.forEach(function(q){ addQ('T5', null, q); });

  var typeMeta = {};
  IV.types.forEach(function(t){ typeMeta[t.id] = t; });
  var counts = {};
  paper.forEach(function(p){ counts[p.type] = (counts[p.type]||0) + 1; });

  var h = '<h3>我的面试能力提升</h3>';
  h += '<p style="font-size:12.5px;color:#6b7385;margin:-6px 0 13px">'+
       '下面这份面试题单是<b style="color:#22304e">根据你的真实画像动态生成</b>的：技术深度题取自你的优势维度（验证是否真的掌握），'+
       '短板压力题取自你的待加强项（这是面试中最容易失分的地方），情景题针对你的首推岗位「'+top.name+'」。'+
       '每题都附了答题要点与参考思路，建议先自己作答，再展开对照。</p>';

  // 概览统计
  h += '<div class="iv-head">'+
    '<div class="iv-stat"><div class="v">'+paper.length+'</div><div class="k">本次题单题量</div></div>'+
    '<div class="iv-stat"><div class="v">'+(counts['T3']||0)+'</div><div class="k">短板压力题（重点）</div></div>'+
    '<div class="iv-stat"><div class="v">'+(counts['T1']||0)+'</div><div class="k">技术深度题</div></div>'+
    '<div class="iv-stat"><div class="v">'+IV.rubric.length+'</div><div class="k">评分维度</div></div>'+
    '</div>';

  // 评分标准
  h += '<div class="sect-title">面试评分标准（自评时对照）</div><div class="rubric">';
  IV.rubric.forEach(function(r){
    h += '<div class="rb"><div class="rn">'+r.name+'</div><div class="rw">权重 '+(r.weight*100).toFixed(0)+'%</div><div class="rd">'+r.desc+'</div></div>';
  });
  h += '</div>';
  h += '<div style="font-size:11.5px;color:#7a8299;margin-bottom:4px">分数锚点：</div>';
  IV.anchors.forEach(function(a){
    h += '<div class="anchor-row"><span class="ar">'+a.range+'</span><span class="ad">'+a.desc+'</span></div>';
  });
  h += '<div class="note" style="margin-top:9px">关键规则：诚实说"不会"但能给出学习思路，应变能力可得 60–70 分；编造技术细节一旦被追问就会暴露，专业应答直接判 30 分以下。</div>';

  // 题单（按类型分组，可切换）
  h += '<div class="sect-title">我的个性化题单</div><div class="iv-tabs" id="ivTabs">';
  IV.types.forEach(function(t, i){
    if(!counts[t.id]) return;
    h += '<button class="iv-tab'+(i===0?' on':'')+'" data-ivt="'+t.id+'">'+t.name+'（'+counts[t.id]+'）</button>';
  });
  h += '<button class="iv-tab" data-ivt="ALL">全部（'+paper.length+'）</button></div>';
  h += '<div id="ivList"></div>';

  // 针对性辅导
  h += '<div class="sect-title">针对我的短板辅导</div>';
  var coached = [];
  weakDims.concat([clsWeak]).forEach(function(dk){
    if(coached.indexOf(dk) >= 0) return;
    coached.push(dk);
    var c = IV.dim_coaching[dk];
    if(!c) return;
    var isMain = weakDims.indexOf(dk) >= 0;
    h += '<div class="coach'+(isMain?'':' mid')+'">'+
         '<div class="cd">'+GRAPH.dim_dict[dk]+'（我的得分 '+(s.dims[dk]===undefined?'缺测':s.dims[dk])+' 分）'+
           (isMain?' · 我的短板项':' · 班级整体薄弱项')+'</div>'+
         '<div class="cr"><b>面试风险：</b>'+c.risk+'</div>'+
         '<div class="ca"><b>训练方法：</b>'+c.drill+'</div></div>';
  });

  // 通用面试技巧
  h += '<div class="sect-title">通用面试技巧（7 条）</div>';
  IV.techniques.forEach(function(t, i){
    h += '<div class="tip-item"><span class="tn">'+(i+1)+'</span><span class="tb"><b>'+t.title+'</b><span>'+t.desc+'</span></span></div>';
  });

  h += '<div class="sect-title">去职前通平台实战演练</div>';
  h += '<div class="zqt-box" style="margin-top:0"><div class="zh"><span class="badge-zqt">职前通</span>'+
       'AI 面试与题库训练<span class="why">本平台题单用于练习思路，平台 AI 面试可进行真人化多轮对练</span></div>';
  Z.tools.forEach(function(t){
    if(['aiinterview','exam','resume'].indexOf(t.id) < 0) return;
    h += '<a class="zlink tool" href="'+t.url+'" target="_blank" rel="noopener">'+t.name+(t.need_login?'（需登录）':'')+'</a>';
  });
  h += '<div style="font-size:11.5px;color:#5a6478;line-height:1.7;margin-top:5px">'+
       '建议练习顺序：先用上方题单自查思路 → 到「题库训练」做认证考点练习 → 用「AI 面试」进行多轮实战对练 → 投递前用「简历优化」完善简历。'+
       '上述功能需登录职前通账号后使用。</div></div>';

  h += '<div class="note">本题单由 A7 模拟面试智能体的题库与组卷规则驱动，依据你的画像短板与目标岗位动态生成。'+
       '完整的 AI 数字人模拟面试（多轮追问 + 实时评分 + 面试表现回写画像）为平台三期建设内容，当前版本提供题库、参考思路与自评工具，并对接职前通平台 AI 面试功能作为实战演练通道。</div>';

  var card = document.getElementById('stuIvCard');
  card.innerHTML = h;

  // 渲染题目列表
  function renderIvList(filter){
    var list = (filter === 'ALL') ? paper : paper.filter(function(p){ return p.type === filter; });
    var box = document.getElementById('ivList');
    if(!list.length){ box.innerHTML = '<div class="empty">该题型本次未生成题目</div>'; return; }
    var out = '';
    list.forEach(function(p){
      var t = typeMeta[p.type];
      var q = p.q;
      out += '<div class="iv-q">'+
        '<div class="qh"><span class="qt" style="background:'+t.color+'">'+p.type+'</span>'+
        '<span class="qq">'+q.q+'</span></div>'+
        '<div class="meta">'+t.name+
          (p.dimName?' · 考察维度：'+p.dimName:'')+
          (p.dim && s.dims[p.dim] !== undefined ? '（我的得分 '+s.dims[p.dim]+' 分）' : '')+
          (p.note?' · '+p.note:'')+'</div>'+
        '<div class="iv-sec" data-sec="pts"><div class="lb">答题要点（'+q.points.length+' 项）</div>'+
          '<div class="bd"><ul>'+q.points.map(function(x){ return '<li>'+x+'</li>'; }).join('')+'</ul></div></div>'+
        '<div class="iv-sec" data-sec="ref"><div class="lb">参考思路（建议先自己作答再展开）</div>'+
          '<div class="bd"><div class="ref">'+q.ref+'</div>'+
          (q.followups && q.followups.length ? '<div class="fu"><b>面试官可能追问：</b>'+q.followups.join('；')+'</div>' : '')+
          '</div></div>'+
        '<div class="iv-self"><span class="sl">我的自评：</span>'+
          '<select data-self aria-label="本题自评得分档">'+
            '<option value="">未作答</option>'+
            '<option value="90">90–100 要点全中且有深度</option>'+
            '<option value="75">75–89 主要要点命中</option>'+
            '<option value="60">60–74 部分要点，深度不足</option>'+
            '<option value="40">40–59 零散概念，逻辑混乱</option>'+
            '<option value="20">0–39 答非所问或不会</option>'+
          '</select>'+
          '<span class="iv-score" data-scoreout></span></div>'+
        '</div>';
    });
    out += '<div class="iv-self" style="border:1px solid #e5e9f5;border-radius:9px;padding:11px 14px;margin-top:4px;background:#f7f9fd">'+
           '<span class="sl" style="font-size:12.5px">本次练习自评均分：</span>'+
           '<span class="iv-score" id="ivAvg" style="font-size:15px;background:#eef2ff;color:#4338ca">—</span>'+
           '<span class="sl" id="ivAvgTip" style="margin-left:8px"></span></div>';
    box.innerHTML = out;

    // 折叠交互
    box.querySelectorAll('.iv-sec .lb').forEach(function(lb){
      lb.addEventListener('click', function(){ lb.parentNode.classList.toggle('open'); });
    });
    // 自评交互
    function updateAvg(){
      var vals = [];
      box.querySelectorAll('[data-self]').forEach(function(sel){
        if(sel.value) vals.push(Number(sel.value));
      });
      var avgEl = document.getElementById('ivAvg');
      var tipEl = document.getElementById('ivAvgTip');
      if(!vals.length){ avgEl.textContent = '—'; tipEl.textContent = '完成自评后显示均分'; return; }
      var avg = Math.round(vals.reduce(function(a,b){ return a+b; },0) / vals.length * 10) / 10;
      avgEl.textContent = avg + ' 分';
      var lvl, col;
      if(avg >= 80){ lvl = '可投递状态'; col = '#0d9f5f'; }
      else if(avg >= 65){ lvl = '需针对性训练后投递'; col = '#d97706'; }
      else { lvl = '建议先完成能力提升计划'; col = '#dc2626'; }
      avgEl.style.background = col + '1a';
      avgEl.style.color = col;
      tipEl.textContent = '已自评 '+vals.length+' / '+list.length+' 题 · '+lvl;
    }
    box.querySelectorAll('[data-self]').forEach(function(sel){
      sel.addEventListener('change', function(){
        var out2 = sel.parentNode.querySelector('[data-scoreout]');
        if(sel.value){
          var v = Number(sel.value);
          var col = v >= 75 ? '#0d9f5f' : (v >= 60 ? '#d97706' : '#dc2626');
          out2.textContent = sel.options[sel.selectedIndex].text.split(' ')[0];
          out2.style.background = col + '1a';
          out2.style.color = col;
        } else {
          out2.textContent = '';
          out2.style.background = 'transparent';
        }
        updateAvg();
      });
    });
    updateAvg();
  }

  // Tab 切换
  var firstType = IV.types.filter(function(t){ return counts[t.id]; })[0];
  renderIvList(firstType ? firstType.id : 'ALL');
  card.querySelectorAll('#ivTabs .iv-tab').forEach(function(btn){
    btn.addEventListener('click', function(){
      card.querySelectorAll('#ivTabs .iv-tab').forEach(function(b){ b.classList.remove('on'); });
      btn.classList.add('on');
      renderIvList(btn.getAttribute('data-ivt'));
    });
  });
}


/* SECTION: radar-svg */
function radarSVG(s){
  var W=290, cx=W/2, cy=W/2+8, R=96;
  var n = DIM_ORDER.length, ang = function(i){ return -Math.PI/2 + i*2*Math.PI/n; };
  function pt(i,r){ return [cx+r*Math.cos(ang(i)), cy+r*Math.sin(ang(i))]; }
  var svg = '<svg viewBox="0 0 '+W+' '+(W+26)+'" width="100%" role="img" aria-label="'+s.name+'的能力雷达图">';
  [0.25,0.5,0.75,1].forEach(function(f){
    var p = DIM_ORDER.map(function(_,i){ var q=pt(i,R*f); return q[0].toFixed(1)+','+q[1].toFixed(1); }).join(' ');
    svg += '<polygon points="'+p+'" fill="none" stroke="#e3e8f4" stroke-width="1"/>';
  });
  DIM_ORDER.forEach(function(k,i){
    var q = pt(i,R);
    svg += '<line x1="'+cx+'" y1="'+cy+'" x2="'+q[0].toFixed(1)+'" y2="'+q[1].toFixed(1)+'" stroke="#e3e8f4" stroke-width="1"/>';
  });
  var dataPts = DIM_ORDER.map(function(k,i){
    var v = (s.dims[k]===undefined?0:s.dims[k])/100;
    var q = pt(i,R*Math.max(v,0.04));
    return q[0].toFixed(1)+','+q[1].toFixed(1);
  }).join(' ');
  svg += '<polygon points="'+dataPts+'" fill="rgba(99,102,241,.22)" stroke="#6366f1" stroke-width="2" stroke-linejoin="round"/>';
  DIM_ORDER.forEach(function(k,i){
    var q = pt(i,R+17);
    var v = s.dims[k];
    var label = RADAR_SHORT[k] || dimName(k);
    var anchor = Math.abs(q[0]-cx)<8 ? 'middle' : (q[0]>cx?'start':'end');
    var col = (v!==undefined && v<60) ? '#dc2626' : '#5a6478';
    svg += '<text x="'+q[0].toFixed(1)+'" y="'+(q[1]+3).toFixed(1)+'" text-anchor="'+anchor+'" font-size="10.5" fill="'+col+'">'+label+(v!==undefined?' '+Math.round(v):' 缺测')+'</text>';
  });
  svg += '</svg>';
  return svg;
}
