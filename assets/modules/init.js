/* Dynamic class metadata injection */
(function(){
  // Inject class name into portal subtitle
  var portalSub = document.getElementById('portalSub');
  if(portalSub && typeof D !== 'undefined' && typeof COURSE !== 'undefined'){
    portalSub.textContent = D.cls + ' · ' + COURSE.title + ' · 基于学生能力画像的就业匹配与成长规划';
  }
  // Inject class name into teacher header
  var headerCls = document.getElementById('headerCls');
  if(headerCls && typeof D !== 'undefined'){
    headerCls.textContent = D.cls;
  }
  // Update page title dynamically
  if(typeof D !== 'undefined'){
    document.title = '精准就业服务平台 · ' + D.cls + ' 学生能力画像与岗位推荐';
  }
})();

/* Job database update button handler */
(function(){
  var btnUpdate = document.getElementById('btnUpdateJobs');
  var statusEl = document.getElementById('updateStatus');
  
  if(!btnUpdate) return;
  
  btnUpdate.addEventListener('click', function(){
    // 确认对话框
    if(!confirm('确定要从职前通平台更新岗位库数据吗？\n\n此操作将：\n1. 从职前通网站抓取最新职位信息\n2. 生成新的 zqt.js 文件\n3. 您需要手动替换原文件以应用更新')){
      return;
    }
    
    // 禁用按钮并显示状态
    btnUpdate.disabled = true;
    btnUpdate.textContent = '⏳ 正在更新...';
    statusEl.textContent = '正在连接服务器...';
    statusEl.style.color = '#6b7385';
    
    // 调用后端 API
    fetch('/api/update-jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(function(response){
      if(!response.ok){
        throw new Error('HTTP ' + response.status);
      }
      statusEl.textContent = '正在抓取职位数据，请稍候...';
      return response.json();
    })
    .then(function(result){
      btnUpdate.disabled = false;
      btnUpdate.textContent = '🔄 从职前通更新岗位库';
      
      if(result.success){
        // 成功
        statusEl.textContent = '';
        
        // 显示成功对话框
        var msg = '✅ 岗位库更新成功！\n\n' +
                  '更新信息：\n' +
                  '• 新增职位数：' + result.jobCount + '\n' +
                  '• 新文件：' + result.newFile + '\n' +
                  '• 路径：' + result.newFilePath + '\n\n' +
                  '下一步操作：\n' +
                  '1. 将 ' + result.newFile + ' 重命名为 zqt.js\n' +
                  '2. 用新文件替换 assets/zqt.js\n' +
                  '3. 刷新页面查看更新后的岗位库\n\n' +
                  '是否现在打开文件所在目录？';
        
        if(confirm(msg)){
          // 尝试打开文件管理器（仅在本地服务器环境下有效）
          window.open('file:///' + result.newFilePath.replace(/\\/g, '/'), '_blank');
        }
        
        // 刷新岗位库视图（如果当前在教师端）
        if(typeof renderJobsView === 'function'){
          renderJobsView();
        }
      } else {
        // 失败
        statusEl.textContent = '❌ ' + result.message;
        statusEl.style.color = '#dc2626';
        alert('更新失败：' + result.message);
      }
    })
    .catch(function(error){
      btnUpdate.disabled = false;
      btnUpdate.textContent = '🔄 从职前通更新岗位库';
      statusEl.textContent = '❌ 网络错误';
      statusEl.style.color = '#dc2626';
      
      var errorMsg = '更新失败：' + error.message + '\n\n' +
                     '可能的原因：\n' +
                     '1. 本地服务器未启动（需要运行 npm start）\n' +
                     '2. 网络连接问题\n' +
                     '3. 服务器端口 3000 被占用\n\n' +
                     '请确保已启动本地服务器：\n' +
                     '  cd 精准就业平台-重构版\n' +
                     '  npm start';
      
      alert(errorMsg);
    });
  });
})();

/* SECTION: esc */
document.addEventListener('keydown', function(e){
  if(e.key!=='Escape') return;
  if(document.getElementById('jobMask').classList.contains('open')) closeJobModal();
  else closeModal();
});


/* SECTION: export */
document.getElementById('btnExport').addEventListener('click', function(){
  var head = '\uFEFF学号,姓名,综合画像分,等级,网络基础搭建,VLAN交换技术,高可用部署,STP协议理论,综合项目设计,运维排错,首推岗位,首推匹配度';
  var rows = D.students.map(function(s){
    var dims = DIM_ORDER.map(function(k){ return s.dims[k]===undefined?'':s.dims[k]; });
    return [s.sid, s.name, s.overall, s.level].concat(dims).concat([s.jobs[0].name, s.jobs[0].fit]).join(',');
  });
  var blob = new Blob([head+'\n'+rows.join('\n')], {type:'text/csv;charset=utf-8'});
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = (typeof D!=='undefined' ? D.cls : '学生能力画像') + '汇总.csv';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(a.href);
});