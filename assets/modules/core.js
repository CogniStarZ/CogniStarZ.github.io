/* SECTION: app */
var D = STUDENTS_DATA;
var JOBS = JOBS_DATA;
var GRAPH = GRAPH_DATA;
var IV = INTERVIEW_DATA;
var Z = ZQT;
var DIM_ORDER = ['d1','d2','d3','d4','d5','d6'];
// 图谱专用：全维度顺序（含 d7–d14 扩维），用于维度筛选与标签维度名反查
var GRAPH_DIM_ORDER = Object.keys(GRAPH.dim_dict).sort(function(a,b){
  return parseInt(a.slice(1),10) - parseInt(b.slice(1),10);
});
var GRAPH_ASSESSED = GRAPH.dim_assessed || DIM_ORDER;
function graphDimName(k){ return GRAPH.dim_dict[k] || k; }
// 维度名 → 维度键（全维度反查，修复 d7–d14 标签取不到键的问题）
function dimKeyByName(name){
  for(var i=0;i<GRAPH_DIM_ORDER.length;i++){ if(GRAPH.dim_dict[GRAPH_DIM_ORDER[i]]===name) return GRAPH_DIM_ORDER[i]; }
  return null;
}
var LV_COLORS = {'卓越':'#0d9f5f','良好':'#2563eb','达标':'#d97706','待提升':'#dc2626'};
var byId = {};
D.students.forEach(function(s,i){ byId[s.sid] = i; });
var JOBS_BY_ID = {};
JOBS.forEach(function(j){ JOBS_BY_ID[j.id] = j; });
var RADAR_SHORT = {'d1':'网络搭建','d2':'VLAN技术','d3':'高可用','d4':'STP理论','d5':'项目设计','d6':'运维排错'};
function dimName(k){ return D.dim_avgs[k] ? D.dim_avgs[k].name : k; }

/* SECTION: nav */
var VIEWS = {portal:'viewPortal', teacher:'viewTeacher', pick:'viewPick', stuHome:'viewStuHome', eval:'viewEval'};
var WHERE = {portal:'总入口', teacher:'教师端', pick:'学生端 · 学号选择', stuHome:'学生端', eval:'课堂综合能力测评'};
function showView(v, stuName){
  for (var k in VIEWS) document.getElementById(VIEWS[k]).style.display = (k===v) ? '' : 'none';
  document.getElementById('btnHome').style.display = (v==='portal') ? 'none' : '';
  document.getElementById('whereAm').textContent = (v==='stuHome' && stuName) ? WHERE[v]+' · '+stuName : WHERE[v];
  closeAllModals();
  window.scrollTo(0,0);
}
function closeAllModals(){ closeModal(); closeJobModal(); }
document.getElementById('btnHome').addEventListener('click', function(){ showView('portal'); });
function bindEnter(el, fn){ el.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); fn(); } }); }
function esc(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
bindEnter(document.getElementById('goTeacher'), function(){ showView('teacher'); });
document.getElementById('goTeacher').addEventListener('click', function(){ showView('teacher'); });
bindEnter(document.getElementById('goStudent'), function(){ showView('pick'); });
document.getElementById('goStudent').addEventListener('click', function(){ showView('pick'); });

/* SECTION: eval-open */
function decodeEval(){
  var bin = atob(EVAL_EMBED_B64);
  var bytes = new Uint8Array(bin.length);
  for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder('utf-8').decode(bytes);
}
var evalBlobUrl = null;
function ensureEvalSrc(){
  var fr = document.getElementById('evalFrame');
  if(fr.getAttribute('src')) return;
  if(!evalBlobUrl){
    evalBlobUrl = URL.createObjectURL(new Blob([decodeEval()], {type:'text/html;charset=utf-8'}));
  }
  fr.setAttribute('src', evalBlobUrl);
}
function openEval(){
  showView('eval');
  ensureEvalSrc();
}
function openEvalNewWin(){
  var w = window.open('', '_blank');
  if(w){ w.document.open(); w.document.write(decodeEval()); w.document.close(); return; }
  ensureEvalSrc();
  var a = document.createElement('a');
  a.href = evalBlobUrl; a.target = '_blank';
  document.body.appendChild(a); a.click(); a.remove();
}
bindEnter(document.getElementById('goEval'), openEval);
document.getElementById('goEval').addEventListener('click', openEval);
document.getElementById('evalBack').addEventListener('click', function(){ showView('portal'); });
document.getElementById('evalBack2').addEventListener('click', function(){ showView('portal'); });
document.getElementById('evalNewWin').addEventListener('click', openEvalNewWin);
