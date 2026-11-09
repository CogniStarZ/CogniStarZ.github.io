// SECTION: graph-data — ICT 垂直行业岗位能力图谱（四层结构：方向→岗位族→岗位→技能标签）
// 标签来源：course=课程知识点映射 / cert=华为认证大纲 / industry=行业通用岗位要求
// 规模：60 个岗位、1200 个技能标签（核心 840）；matchable=true 的岗位参与学生匹配
var GRAPH_DATA = {
 "target": {
  "jobs": "50+",
  "tags": "1000+",
  "directions": 6
 },
 "layers": [
  {
   "no": 1,
   "name": "行业方向层",
   "desc": "对接职前通 ICT 课程体系的 6 大方向"
  },
  {
   "no": 2,
   "name": "岗位族层",
   "desc": "按职能聚类，支撑赛道化培养"
  },
  {
   "no": 3,
   "name": "具体岗位层",
   "desc": "源自企业真实用人 JD 的可投递岗位"
  },
  {
   "no": 4,
   "name": "技能标签层",
   "desc": "带权重（核心/加分）并映射到能力维度"
  }
 ],
 "directions": [
  {
   "id": "dir-anf",
   "name": "数字安防",
   "status": "active",
   "families": [
    "安防集成实施类",
    "安防运维保障类",
    "安防售前与方案类",
    "智能安防应用类",
    "网络运维类",
    "技术支持与售前类"
   ],
   "job_count": 18,
   "note": "本校安全防范技术专业主方向，技能与现有课程及学生画像完全对应，是学生首推就业赛道"
  },
  {
   "id": "dir-datacom",
   "name": "华为Datacom数通",
   "status": "active",
   "families": [
    "网络工程类",
    "网络运维类",
    "网络安全类",
    "技术支持与售前类"
   ],
   "job_count": 14,
   "note": "与数字安防方向技能高度重合（VLAN/STP/高可用/排错），迁移成本最低，是学生的重点拓展赛道"
  },
  {
   "id": "dir-cloud",
   "name": "云计算",
   "status": "active",
   "families": [
    "云与运维类",
    "云工程实施类"
   ],
   "job_count": 7,
   "note": "由安防运维与机房建设能力延伸，需补充 Linux、虚拟化、容器等维度（d7/d8），属中期发展方向"
  },
  {
   "id": "dir-bigdata",
   "name": "大数据",
   "status": "active",
   "families": [
    "数据开发类",
    "数据分析治理类"
   ],
   "job_count": 7,
   "note": "需数据处理与编程维度（d9/d10），安防海量视频与告警数据的分析需求为其提供了行业结合点"
  },
  {
   "id": "dir-ai",
   "name": "AI人工智能",
   "status": "active",
   "families": [
    "AI应用类"
   ],
   "job_count": 7,
   "note": "聚焦智能安防场景的应用落地（视频结构化、识别调优、模型部署），与安防视频分析能力衔接紧密"
  },
  {
   "id": "dir-harmony",
   "name": "鸿蒙与终端",
   "status": "active",
   "families": [
    "鸿蒙终端类"
   ],
   "job_count": 7,
   "note": "对接安防前端设备的嵌入式与物联接入需求，需终端开发维度（d12），属特色延伸方向"
  }
 ],
 "families": [
  {
   "id": "fam-anf-impl",
   "name": "安防集成实施类",
   "direction": "数字安防",
   "status": "active",
   "jobs": [
    "sec-net",
    "cctv-impl",
    "weak-cur",
    "anf-access",
    "anf-alarm",
    "anf-cabling"
   ],
   "desc": "安防监控、门禁、报警系统的建设、调试与现场交付"
  },
  {
   "id": "fam-anf-ops",
   "name": "安防运维保障类",
   "direction": "数字安防",
   "status": "active",
   "jobs": [
    "patrol",
    "anf-platform-ops",
    "anf-storage",
    "anf-monitor-center"
   ],
   "desc": "在运安防系统的巡检、检修、平台运维与故障处置"
  },
  {
   "id": "fam-anf-pre",
   "name": "安防售前与方案类",
   "direction": "数字安防",
   "status": "active",
   "jobs": [
    "anf-presales",
    "anf-bid",
    "anf-pm"
   ],
   "desc": "安防项目的方案设计、产品选型、投标与售前咨询"
  },
  {
   "id": "fam-anf-intel",
   "name": "智能安防应用类",
   "direction": "数字安防",
   "status": "active",
   "jobs": [
    "anf-intel-video",
    "anf-intel-plat"
   ],
   "desc": "视频结构化、智能分析、安防平台软件的应用与集成"
  },
  {
   "id": "fam-net-eng",
   "name": "网络工程类",
   "direction": "华为Datacom数通",
   "status": "active",
   "jobs": [
    "net-design",
    "dc-arch",
    "dc-campus",
    "dc-dcn",
    "dc-wlan",
    "dc-sdwan",
    "dc-route",
    "dc-switch"
   ],
   "desc": "网络的规划设计、部署实施、优化与架构演进"
  },
  {
   "id": "fam-net-ops",
   "name": "网络运维类",
   "direction": "华为Datacom数通 / 数字安防",
   "status": "active",
   "jobs": [
    "net-ops",
    "dc-netdevops",
    "dc-monitor",
    "dc-onsite"
   ],
   "desc": "网络运行维护、故障处置、驻场保障与自动化运维"
  },
  {
   "id": "fam-net-sec",
   "name": "网络安全类",
   "direction": "华为Datacom数通",
   "status": "active",
   "jobs": [
    "dc-sec-policy",
    "dc-sec-ops",
    "dc-compliance"
   ],
   "desc": "网络安全策略部署、等保合规、安全运维与应急响应"
  },
  {
   "id": "fam-cloud-ops",
   "name": "云与运维类",
   "direction": "云计算",
   "status": "active",
   "jobs": [
    "cl-ops",
    "cl-virt",
    "cl-k8s",
    "cl-idc"
   ],
   "desc": "云平台部署运维、IDC机房运维、容器编排与DevOps"
  },
  {
   "id": "fam-cloud-eng",
   "name": "云工程实施类",
   "direction": "云计算",
   "status": "active",
   "jobs": [
    "cl-net",
    "cl-migrate"
   ],
   "desc": "私有云/混合云方案实施、云迁移与云技术支持"
  },
  {
   "id": "fam-data-dev",
   "name": "数据开发类",
   "direction": "大数据",
   "status": "active",
   "jobs": [
    "bd-etl",
    "bd-dw",
    "bd-realtime",
    "bd-platform"
   ],
   "desc": "数据采集、清洗、数仓建模、ETL与实时计算开发"
  },
  {
   "id": "fam-data-ana",
   "name": "数据分析治理类",
   "direction": "大数据",
   "status": "active",
   "jobs": [
    "bd-bi",
    "bd-gov",
    "bd-analyst"
   ],
   "desc": "数据分析、BI可视化、数据治理与指标体系建设"
  },
  {
   "id": "fam-ai-app",
   "name": "AI应用类",
   "direction": "AI人工智能",
   "status": "active",
   "jobs": [
    "ai-deploy",
    "ai-cv",
    "ai-llm",
    "ai-label",
    "ai-platform-ops",
    "ai-solution",
    "ai-edge"
   ],
   "desc": "AI模型部署、智能应用集成、数据治理与产品落地"
  },
  {
   "id": "fam-term-dev",
   "name": "鸿蒙终端类",
   "direction": "鸿蒙与终端",
   "status": "active",
   "jobs": [
    "hm-app",
    "hm-ui",
    "hm-dist",
    "hm-driver",
    "hm-test",
    "hm-embedded",
    "hm-iot"
   ],
   "desc": "鸿蒙应用开发、终端设备适配、测试与嵌入式开发"
  },
  {
   "id": "fam-support",
   "name": "技术支持与售前类",
   "direction": "数字安防 / 华为Datacom数通",
   "status": "active",
   "jobs": [
    "support",
    "dc-presales",
    "cl-presales"
   ],
   "desc": "面向客户的技术支持、售前咨询、服务保障与知识运营"
  }
 ],
 "dim_dict": {
  "d1": "网络基础搭建",
  "d2": "VLAN交换技术",
  "d3": "高可用部署",
  "d4": "STP协议理论",
  "d5": "综合项目设计",
  "d6": "运维排错",
  "d7": "操作系统与Linux",
  "d8": "云与虚拟化技术",
  "d9": "编程与自动化开发",
  "d10": "数据处理与分析",
  "d11": "AI与智能算法",
  "d12": "终端与嵌入式开发",
  "d13": "网络安全与合规",
  "d14": "工程管理与职业素养"
 },
 "dim_assessed": [
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6"
 ],
 "jobs": [
  {
   "job_id": "sec-net",
   "name": "安防网络集成工程师",
   "direction": "数字安防",
   "family": "安防集成实施类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d1": 0.2,
    "d2": 0.3,
    "d3": 0.2,
    "d4": 0.15,
    "d5": 0.15
   },
   "core_tags": [
    {
     "tag": "安防监控系统整体组网",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "前端摄像机安装与调试",
     "dim": [
      "d1"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "安防平台软件对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "多厂商设备联调",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "VLAN规划与业务隔离",
     "dim": [
      "d2"
     ],
     "level": "精通",
     "source": "course",
     "weight": 0.081
    },
    {
     "tag": "Access/Trunk端口配置",
     "dim": [
      "d2"
     ],
     "level": "精通",
     "source": "course",
     "weight": 0.077
    },
    {
     "tag": "NVR/存储设备配置",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "门禁与出入口控制系统",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.068
    },
    {
     "tag": "报警系统联动配置",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "周界防范系统部署",
     "dim": [
      "d1"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "楼宇自控系统对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "视频结构化与智能分析应用",
     "dim": [
      "d1",
      "d11"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "安防工程施工工艺规范",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "综合布线设计与施工",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "项目验收文档编制",
     "dim": [
      "d5"
     ],
     "source": "industry"
    },
    {
     "tag": "华为eNSP仿真验证",
     "dim": [
      "d1",
      "d2"
     ],
     "source": "cert"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Datacom",
     "安防系统安装调试员"
    ],
    "after_join": [
     "HCIP-Datacom",
     "网络系统集成项目经理（软考）"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "数字安防网络隔离与VLAN划分",
    "数字安防网络高可用部署与优化",
    "数字安防网络项目运维与综合优化"
   ],
   "jd_basis": "安防系统集成商与华为生态伙伴的网络集成岗位通用要求"
  },
  {
   "job_id": "net-ops",
   "name": "网络运维工程师",
   "direction": "数字安防",
   "family": "网络运维类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d6": 0.3,
    "d3": 0.25,
    "d4": 0.2,
    "d2": 0.25
   },
   "core_tags": [
    {
     "tag": "网络故障分层排查方法",
     "dim": [
      "d6"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "抓包分析（Wireshark）",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "网络变更实施与回退预案",
     "dim": [
      "d6",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "SNMP与网管平台监控",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.087
    },
    {
     "tag": "NVR/存储设备配置",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "视频码流与画质调优",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.077
    },
    {
     "tag": "网络故障定位与恢复",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "检修台账与工单管理",
     "dim": [
      "d6",
      "d14"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.068
    },
    {
     "tag": "设备巡检标准化作业",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "机房建设与UPS供电",
     "dim": [
      "d1",
      "d3"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "链路聚合与冗余部署",
     "dim": [
      "d3"
     ],
     "level": "熟悉",
     "source": "course",
     "weight": 0.056
    },
    {
     "tag": "VLAN规划与业务隔离",
     "dim": [
      "d2"
     ],
     "level": "精通",
     "source": "course",
     "weight": 0.051
    },
    {
     "tag": "Access/Trunk端口配置",
     "dim": [
      "d2"
     ],
     "level": "精通",
     "source": "course",
     "weight": 0.047
    },
    {
     "tag": "STP/RSTP防环配置",
     "dim": [
      "d4"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "应急响应与故障复盘",
     "dim": [
      "d6",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "运维文档与SOP编制",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Datacom",
     "网络管理员（软考初级）"
    ],
    "after_join": [
     "HCIP-Datacom",
     "网络工程师（软考中级）"
    ]
   },
   "course_map": [
    "数字安防网络高可用部署与优化",
    "数字安防网络项目运维与综合优化",
    "数字安防网络隔离与VLAN划分"
   ],
   "jd_basis": "安防运营单位、集成商与甲方信息部门的网络运维岗位通用要求"
  },
  {
   "job_id": "cctv-impl",
   "name": "视频监控集成调试工程师",
   "direction": "数字安防",
   "family": "安防集成实施类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d1": 0.3,
    "d2": 0.3,
    "d5": 0.2,
    "d4": 0.2
   },
   "core_tags": [
    {
     "tag": "前端摄像机安装与调试",
     "dim": [
      "d1"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "NVR/存储设备配置",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "视频码流与画质调优",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "安防平台软件对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "安防监控系统整体组网",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "门禁与出入口控制系统",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.077
    },
    {
     "tag": "报警系统联动配置",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "周界防范系统部署",
     "dim": [
      "d1"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.068
    },
    {
     "tag": "楼宇自控系统对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "视频结构化与智能分析应用",
     "dim": [
      "d1",
      "d11"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "安防工程施工工艺规范",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "综合布线设计与施工",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "机房建设与UPS供电",
     "dim": [
      "d1",
      "d3"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "交换机基础配置与联通验证",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "course",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "防雷接地与施工安全",
     "dim": [
      "d13",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "安防系统安装调试员",
     "HCIA-Datacom"
    ],
    "after_join": [
     "厂商产品认证（海康/大华）",
     "HCIP-Datacom"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "数字安防网络隔离与VLAN划分",
    "数字安防网络项目运维与综合优化"
   ],
   "jd_basis": "安防集成商、监控设备厂商服务体系的现场调试岗位通用要求"
  },
  {
   "job_id": "net-design",
   "name": "网络规划设计工程师",
   "direction": "数字安防",
   "family": "网络工程类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d5": 0.35,
    "d1": 0.3,
    "d4": 0.15,
    "d2": 0.2
   },
   "core_tags": [
    {
     "tag": "网络拓扑与分层架构设计",
     "dim": [
      "d5",
      "d1"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "安防项目方案设计",
     "dim": [
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "设备选型与技术经济性评估",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "技术方案文档编制",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "安防监控系统整体组网",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "安防平台软件对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.077
    },
    {
     "tag": "报警系统联动配置",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "楼宇自控系统对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.068
    },
    {
     "tag": "弱电工程图纸识读",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "安防项目验收流程",
     "dim": [
      "d14",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "前端摄像机安装与调试",
     "dim": [
      "d1"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "NVR/存储设备配置",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "门禁与出入口控制系统",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "周界防范系统部署",
     "dim": [
      "d1"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "eNSP/eNSP Pro仿真验证",
     "dim": [
      "d1",
      "d2"
     ],
     "source": "cert"
    },
    {
     "tag": "需求理解与转化能力",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Datacom",
     "网络管理员（软考初级）"
    ],
    "after_join": [
     "HCIP-Datacom",
     "网络规划设计师（软考高级）"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "数字安防网络隔离与VLAN划分",
    "数字安防网络高可用部署与优化"
   ],
   "jd_basis": "设计院、集成商技术部与甲方信息化部门的规划设计岗位通用要求"
  },
  {
   "job_id": "patrol",
   "name": "安防系统运维检修工程师",
   "direction": "数字安防",
   "family": "安防运维保障类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d6": 0.35,
    "d3": 0.25,
    "d2": 0.2,
    "d1": 0.2
   },
   "core_tags": [
    {
     "tag": "设备巡检标准化作业",
     "dim": [
      "d6"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "检修台账与工单管理",
     "dim": [
      "d6",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "备件管理与更换计划",
     "dim": [
      "d14"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "网络故障定位与恢复",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "NVR/存储设备配置",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "视频码流与画质调优",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.077
    },
    {
     "tag": "机房建设与UPS供电",
     "dim": [
      "d1",
      "d3"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "链路聚合与冗余部署",
     "dim": [
      "d3"
     ],
     "level": "熟悉",
     "source": "course",
     "weight": 0.068
    },
    {
     "tag": "VLAN规划与业务隔离",
     "dim": [
      "d2"
     ],
     "level": "精通",
     "source": "course",
     "weight": 0.064
    },
    {
     "tag": "Access/Trunk端口配置",
     "dim": [
      "d2"
     ],
     "level": "精通",
     "source": "course",
     "weight": 0.06
    },
    {
     "tag": "安防监控系统整体组网",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "前端摄像机安装与调试",
     "dim": [
      "d1"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "安防平台软件对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "门禁与出入口控制系统",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "标准化作业与规范意识",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "知识沉淀与案例归档",
     "dim": [
      "d14",
      "d6"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "安防系统运维检修员",
     "电工（低压）操作证"
    ],
    "after_join": [
     "HCIA-Datacom",
     "HCIP-Datacom"
    ]
   },
   "course_map": [
    "数字安防网络项目运维与综合优化",
    "数字安防网络高可用部署与优化"
   ],
   "jd_basis": "安防运营单位、物业与集成商售后服务体系的检修岗位通用要求"
  },
  {
   "job_id": "support",
   "name": "技术支持工程师",
   "direction": "数字安防",
   "family": "技术支持与售前类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d1": 0.2,
    "d2": 0.2,
    "d5": 0.2,
    "d6": 0.2,
    "d3": 0.2
   },
   "core_tags": [
    {
     "tag": "网络故障定位与恢复",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "安防平台软件对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "客户沟通与服务意识",
     "dim": [
      "d14"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "知识沉淀与案例归档",
     "dim": [
      "d14",
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "安防监控系统整体组网",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "前端摄像机安装与调试",
     "dim": [
      "d1"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.077
    },
    {
     "tag": "NVR/存储设备配置",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "门禁与出入口控制系统",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.068
    },
    {
     "tag": "报警系统联动配置",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "周界防范系统部署",
     "dim": [
      "d1"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "楼宇自控系统对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "视频结构化与智能分析应用",
     "dim": [
      "d1",
      "d11"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "安防工程施工工艺规范",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "综合布线设计与施工",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "技术演示与培训能力",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "需求理解与转化能力",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Datacom",
     "厂商产品认证"
    ],
    "after_join": [
     "HCIP-Datacom",
     "厂商技术支持认证"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "数字安防网络项目运维与综合优化"
   ],
   "jd_basis": "设备厂商与集成商技术服务体系的售前售后支持岗位通用要求"
  },
  {
   "job_id": "weak-cur",
   "name": "弱电工程实施工程师",
   "direction": "数字安防",
   "family": "安防集成实施类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d1": 0.35,
    "d2": 0.25,
    "d3": 0.2,
    "d5": 0.2
   },
   "core_tags": [
    {
     "tag": "综合布线设计与施工",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "弱电工程图纸识读",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "安防工程施工工艺规范",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "安防项目验收流程",
     "dim": [
      "d14",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "安防监控系统整体组网",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "前端摄像机安装与调试",
     "dim": [
      "d1"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.077
    },
    {
     "tag": "NVR/存储设备配置",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "安防平台软件对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.068
    },
    {
     "tag": "门禁与出入口控制系统",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "报警系统联动配置",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "周界防范系统部署",
     "dim": [
      "d1"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "楼宇自控系统对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "视频结构化与智能分析应用",
     "dim": [
      "d1",
      "d11"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "机房建设与UPS供电",
     "dim": [
      "d1",
      "d3"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "安全生产与合规意识",
     "dim": [
      "d13",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "安防系统安装调试员",
     "电工（低压）操作证"
    ],
    "after_join": [
     "二级建造师（机电）",
     "安全员C证"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "数字安防网络隔离与VLAN划分"
   ],
   "jd_basis": "弱电工程公司与建筑智能化承包单位的施工实施岗位通用要求"
  },
  {
   "job_id": "anf-access",
   "name": "门禁一卡通系统工程师",
   "direction": "数字安防",
   "family": "安防集成实施类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d1": 0.35,
    "d2": 0.25,
    "d5": 0.25,
    "d6": 0.15
   },
   "core_tags": [
    {
     "tag": "门禁与出入口控制系统",
     "dim": [
      "d1"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "报警系统联动配置",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "安防平台软件对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "安防工程施工工艺规范",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "安防监控系统整体组网",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "前端摄像机安装与调试",
     "dim": [
      "d1"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.077
    },
    {
     "tag": "NVR/存储设备配置",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "周界防范系统部署",
     "dim": [
      "d1"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.068
    },
    {
     "tag": "楼宇自控系统对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "视频结构化与智能分析应用",
     "dim": [
      "d1",
      "d11"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "综合布线设计与施工",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "机房建设与UPS供电",
     "dim": [
      "d1",
      "d3"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "交换机基础配置与联通验证",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "course",
     "weight": 0.047
    },
    {
     "tag": "IP地址与网段规划",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "course",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "人脸识别与车牌识别集成",
     "dim": [
      "d11"
     ],
     "source": "industry"
    },
    {
     "tag": "安防项目验收流程",
     "dim": [
      "d14",
      "d5"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "安防系统安装调试员",
     "HCIA-Datacom"
    ],
    "after_join": [
     "厂商门禁产品认证",
     "HCIP-Datacom"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "数字安防网络隔离与VLAN划分"
   ],
   "jd_basis": "安防集成商门禁事业部与一卡通厂商服务岗位通用要求"
  },
  {
   "job_id": "anf-alarm",
   "name": "报警与周界防范工程师",
   "direction": "数字安防",
   "family": "安防集成实施类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d1": 0.4,
    "d5": 0.25,
    "d6": 0.2,
    "d2": 0.15
   },
   "core_tags": [
    {
     "tag": "周界防范系统部署",
     "dim": [
      "d1"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "报警系统联动配置",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "安防监控系统整体组网",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "网络故障定位与恢复",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "前端摄像机安装与调试",
     "dim": [
      "d1"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "NVR/存储设备配置",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.077
    },
    {
     "tag": "安防平台软件对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "门禁与出入口控制系统",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.068
    },
    {
     "tag": "楼宇自控系统对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "视频结构化与智能分析应用",
     "dim": [
      "d1",
      "d11"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "安防工程施工工艺规范",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "综合布线设计与施工",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "机房建设与UPS供电",
     "dim": [
      "d1",
      "d3"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "交换机基础配置与联通验证",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "course",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "防雷接地与施工安全",
     "dim": [
      "d13",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "安防项目验收流程",
     "dim": [
      "d14",
      "d5"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "安防系统安装调试员",
     "HCIA-Datacom"
    ],
    "after_join": [
     "报警系统工程师",
     "HCIP-Datacom"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "数字安防网络项目运维与综合优化"
   ],
   "jd_basis": "高安全等级场所安防集成与报警系统专业厂商岗位通用要求"
  },
  {
   "job_id": "anf-cabling",
   "name": "综合布线工程师",
   "direction": "数字安防",
   "family": "安防集成实施类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d1": 0.45,
    "d5": 0.25,
    "d2": 0.15,
    "d6": 0.15
   },
   "core_tags": [
    {
     "tag": "综合布线设计与施工",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "弱电工程图纸识读",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "安防工程施工工艺规范",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "机房建设与UPS供电",
     "dim": [
      "d1",
      "d3"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "安防监控系统整体组网",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "前端摄像机安装与调试",
     "dim": [
      "d1"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.077
    },
    {
     "tag": "NVR/存储设备配置",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "安防平台软件对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.068
    },
    {
     "tag": "门禁与出入口控制系统",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "报警系统联动配置",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "周界防范系统部署",
     "dim": [
      "d1"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "楼宇自控系统对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "视频结构化与智能分析应用",
     "dim": [
      "d1",
      "d11"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "交换机基础配置与联通验证",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "course",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "安防项目验收流程",
     "dim": [
      "d14",
      "d5"
     ],
     "source": "industry"
    },
    {
     "tag": "标准化作业与规范意识",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "安防系统安装调试员",
     "电工（低压）操作证"
    ],
    "after_join": [
     "综合布线系统工程师",
     "二级建造师（机电）"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建"
   ],
   "jd_basis": "建筑智能化工程公司与布线厂商认证施工体系岗位通用要求"
  },
  {
   "job_id": "anf-platform-ops",
   "name": "安防管理平台运维工程师",
   "direction": "数字安防",
   "family": "安防运维保障类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d6": 0.4,
    "d1": 0.25,
    "d2": 0.2,
    "d5": 0.15
   },
   "core_tags": [
    {
     "tag": "安防平台软件对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "检修台账与工单管理",
     "dim": [
      "d6",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "设备巡检标准化作业",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "网络故障定位与恢复",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "NVR/存储设备配置",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "视频码流与画质调优",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.077
    },
    {
     "tag": "安防监控系统整体组网",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "前端摄像机安装与调试",
     "dim": [
      "d1"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.068
    },
    {
     "tag": "门禁与出入口控制系统",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "报警系统联动配置",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "周界防范系统部署",
     "dim": [
      "d1"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "楼宇自控系统对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "视频结构化与智能分析应用",
     "dim": [
      "d1",
      "d11"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "安防工程施工工艺规范",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "运维文档与SOP编制",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "备份与容灾策略",
     "dim": [
      "d3",
      "d8"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "安防系统运维检修员",
     "HCIA-Datacom"
    ],
    "after_join": [
     "厂商平台产品认证",
     "HCIP-Datacom"
    ]
   },
   "course_map": [
    "数字安防网络项目运维与综合优化",
    "数字安防网络高可用部署与优化"
   ],
   "jd_basis": "安防运营中心、甲方安保信息化部门的平台运维岗位通用要求"
  },
  {
   "job_id": "anf-storage",
   "name": "视频存储与归档工程师",
   "direction": "数字安防",
   "family": "安防运维保障类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d1": 0.3,
    "d6": 0.3,
    "d3": 0.2,
    "d5": 0.2
   },
   "core_tags": [
    {
     "tag": "NVR/存储设备配置",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "视频码流与画质调优",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "机房建设与UPS供电",
     "dim": [
      "d1",
      "d3"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "备份与容灾策略",
     "dim": [
      "d3",
      "d8"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "安防监控系统整体组网",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "前端摄像机安装与调试",
     "dim": [
      "d1"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.077
    },
    {
     "tag": "安防平台软件对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "门禁与出入口控制系统",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.068
    },
    {
     "tag": "报警系统联动配置",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "周界防范系统部署",
     "dim": [
      "d1"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "楼宇自控系统对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "视频结构化与智能分析应用",
     "dim": [
      "d1",
      "d11"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "安防工程施工工艺规范",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "综合布线设计与施工",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "数据安全与脱敏规范",
     "dim": [
      "d13",
      "d10"
     ],
     "source": "industry"
    },
    {
     "tag": "云存储（对象存储/块存储）",
     "dim": [
      "d8"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "安防系统运维检修员",
     "HCIA-Datacom"
    ],
    "after_join": [
     "HCIA-Storage",
     "HCIP-Datacom"
    ]
   },
   "course_map": [
    "数字安防网络高可用部署与优化",
    "数字安防网络项目运维与综合优化"
   ],
   "jd_basis": "安防运营中心与存储厂商服务体系的视频存储岗位通用要求"
  },
  {
   "job_id": "anf-monitor-center",
   "name": "安防监控中心值守工程师",
   "direction": "数字安防",
   "family": "安防运维保障类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d6": 0.35,
    "d1": 0.3,
    "d2": 0.2,
    "d5": 0.15
   },
   "core_tags": [
    {
     "tag": "设备巡检标准化作业",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "安防平台软件对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "应急响应与故障复盘",
     "dim": [
      "d6",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "检修台账与工单管理",
     "dim": [
      "d6",
      "d14"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "NVR/存储设备配置",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "视频码流与画质调优",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.077
    },
    {
     "tag": "网络故障定位与恢复",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "安防监控系统整体组网",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.068
    },
    {
     "tag": "前端摄像机安装与调试",
     "dim": [
      "d1"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "门禁与出入口控制系统",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "报警系统联动配置",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "周界防范系统部署",
     "dim": [
      "d1"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "楼宇自控系统对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "视频结构化与智能分析应用",
     "dim": [
      "d1",
      "d11"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "安全生产与合规意识",
     "dim": [
      "d13",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "客户沟通与服务意识",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "安防系统运维检修员",
     "消防设施操作员"
    ],
    "after_join": [
     "保安员证",
     "安防项目管理培训"
    ]
   },
   "course_map": [
    "数字安防网络项目运维与综合优化"
   ],
   "jd_basis": "公安、交通、园区与地铁等单位监控中心值守岗位通用要求"
  },
  {
   "job_id": "anf-presales",
   "name": "安防售前解决方案工程师",
   "direction": "数字安防",
   "family": "安防售前与方案类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d5": 0.4,
    "d1": 0.25,
    "d2": 0.2,
    "d4": 0.15
   },
   "core_tags": [
    {
     "tag": "安防项目方案设计",
     "dim": [
      "d5"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "设备选型与技术经济性评估",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "技术方案文档编制",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "安防监控系统整体组网",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "安防平台软件对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "报警系统联动配置",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.077
    },
    {
     "tag": "楼宇自控系统对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "弱电工程图纸识读",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.068
    },
    {
     "tag": "安防项目验收流程",
     "dim": [
      "d14",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "前端摄像机安装与调试",
     "dim": [
      "d1"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "NVR/存储设备配置",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "门禁与出入口控制系统",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "周界防范系统部署",
     "dim": [
      "d1"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "视频结构化与智能分析应用",
     "dim": [
      "d1",
      "d11"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "技术演示与培训能力",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "成本控制与资源统筹",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Datacom",
     "安防系统安装调试员"
    ],
    "after_join": [
     "HCIP-Datacom",
     "PMP"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "数字安防网络隔离与VLAN划分",
    "数字安防网络高可用部署与优化"
   ],
   "jd_basis": "安防厂商与集成商售前技术体系的解决方案岗位通用要求"
  },
  {
   "job_id": "anf-bid",
   "name": "安防项目投标与造价工程师",
   "direction": "数字安防",
   "family": "安防售前与方案类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d5": 0.4,
    "d1": 0.25,
    "d14": 0.2,
    "d2": 0.15
   },
   "core_tags": [
    {
     "tag": "安防项目方案设计",
     "dim": [
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "设备选型与技术经济性评估",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "弱电工程图纸识读",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "技术方案文档编制",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "安防监控系统整体组网",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "安防平台软件对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.077
    },
    {
     "tag": "报警系统联动配置",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "楼宇自控系统对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.068
    },
    {
     "tag": "安防项目验收流程",
     "dim": [
      "d14",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "前端摄像机安装与调试",
     "dim": [
      "d1"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "NVR/存储设备配置",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "门禁与出入口控制系统",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "周界防范系统部署",
     "dim": [
      "d1"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "视频结构化与智能分析应用",
     "dim": [
      "d1",
      "d11"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "成本控制与资源统筹",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "安防系统安装调试员",
     "造价员（安装）"
    ],
    "after_join": [
     "二级建造师（机电）",
     "一级建造师"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建"
   ],
   "jd_basis": "安防集成商与建筑智能化企业的投标造价岗位通用要求"
  },
  {
   "job_id": "anf-pm",
   "name": "安防工程项目经理",
   "direction": "数字安防",
   "family": "安防售前与方案类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d5": 0.35,
    "d14": 0.3,
    "d1": 0.2,
    "d6": 0.15
   },
   "core_tags": [
    {
     "tag": "安防项目验收流程",
     "dim": [
      "d14",
      "d5"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "安防工程施工工艺规范",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "安防项目方案设计",
     "dim": [
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "安防监控系统整体组网",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "安防平台软件对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.077
    },
    {
     "tag": "报警系统联动配置",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "楼宇自控系统对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.068
    },
    {
     "tag": "弱电工程图纸识读",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "设备选型与技术经济性评估",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "综合布线设计与施工",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "防雷接地与施工安全",
     "dim": [
      "d13",
      "d14"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "项目现场沟通协调",
     "dim": [
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "检修台账与工单管理",
     "dim": [
      "d6",
      "d14"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "成本控制与资源统筹",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    },
    {
     "tag": "客户沟通与服务意识",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "安防系统安装调试员",
     "安全员C证"
    ],
    "after_join": [
     "二级建造师（机电）",
     "PMP"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "数字安防网络项目运维与综合优化"
   ],
   "jd_basis": "安防集成商与智能化工程企业的项目管理岗位通用要求"
  },
  {
   "job_id": "anf-intel-video",
   "name": "视频智能分析应用工程师",
   "direction": "数字安防",
   "family": "智能安防应用类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d1": 0.3,
    "d6": 0.3,
    "d5": 0.25,
    "d2": 0.15
   },
   "core_tags": [
    {
     "tag": "视频结构化与智能分析应用",
     "dim": [
      "d1",
      "d11"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "人脸识别与车牌识别集成",
     "dim": [
      "d11"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "视频码流与画质调优",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "前端摄像机安装与调试",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "安防监控系统整体组网",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "NVR/存储设备配置",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.077
    },
    {
     "tag": "安防平台软件对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "门禁与出入口控制系统",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.068
    },
    {
     "tag": "报警系统联动配置",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "周界防范系统部署",
     "dim": [
      "d1"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "楼宇自控系统对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "安防工程施工工艺规范",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "综合布线设计与施工",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "机房建设与UPS供电",
     "dim": [
      "d1",
      "d3"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "AI训练数据标注与治理",
     "dim": [
      "d11",
      "d10"
     ],
     "source": "industry"
    },
    {
     "tag": "算法效果评估与AB测试",
     "dim": [
      "d11",
      "d10"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "安防系统安装调试员",
     "HCIA-Datacom"
    ],
    "after_join": [
     "HCIA-AI",
     "厂商智能分析产品认证"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "数字安防网络隔离与VLAN划分",
    "数字安防网络项目运维与综合优化"
   ],
   "jd_basis": "安防厂商智能产品线与集成商智能化事业部岗位通用要求"
  },
  {
   "job_id": "anf-intel-plat",
   "name": "智慧安防平台集成工程师",
   "direction": "数字安防",
   "family": "智能安防应用类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d1": 0.25,
    "d5": 0.25,
    "d6": 0.2,
    "d9": 0.2,
    "d10": 0.1
   },
   "core_tags": [
    {
     "tag": "安防平台软件对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "AI应用集成与接口开发",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "SQL数据查询与优化",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "Python数据处理（Pandas）",
     "dim": [
      "d10",
      "d9"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "安防监控系统整体组网",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "前端摄像机安装与调试",
     "dim": [
      "d1"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.077
    },
    {
     "tag": "NVR/存储设备配置",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "门禁与出入口控制系统",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.068
    },
    {
     "tag": "报警系统联动配置",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "周界防范系统部署",
     "dim": [
      "d1"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "楼宇自控系统对接",
     "dim": [
      "d1",
      "d5"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "视频结构化与智能分析应用",
     "dim": [
      "d1",
      "d11"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "安防工程施工工艺规范",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "综合布线设计与施工",
     "dim": [
      "d1",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "技术方案文档编制",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "新技术验证与选型能力",
     "dim": [
      "d5"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Datacom",
     "安防系统安装调试员"
    ],
    "after_join": [
     "软件设计师（软考中级）",
     "HCIP-Datacom"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "数字安防网络项目运维与综合优化"
   ],
   "jd_basis": "安防平台厂商与智慧城市建设单位的平台集成开发岗位通用要求"
  },
  {
   "job_id": "dc-arch",
   "name": "企业网络架构师",
   "direction": "华为Datacom数通",
   "family": "网络工程类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d5": 0.35,
    "d1": 0.25,
    "d3": 0.2,
    "d4": 0.2
   },
   "core_tags": [
    {
     "tag": "网络拓扑与分层架构设计",
     "dim": [
      "d5",
      "d1"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "高可用与容灾架构设计",
     "dim": [
      "d3",
      "d5"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "数据中心网络（Spine-Leaf）",
     "dim": [
      "d5",
      "d3"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "网络设备选型与配置清单",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "园区网整体组网方案",
     "dim": [
      "d5"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "SDN控制器与网络编排",
     "dim": [
      "d9",
      "d5"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "技术方案文档编制",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "路由协议配置（OSPF/BGP）",
     "dim": [
      "d1",
      "d4"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "静态路由与默认路由规划",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "DHCP与DNS服务配置",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "NAT与公网地址规划",
     "dim": [
      "d1",
      "d13"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.056
    },
    {
     "tag": "IP地址与网段规划",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "course",
     "weight": 0.051
    },
    {
     "tag": "WLAN无线组网与调优",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.047
    },
    {
     "tag": "广域网与专线接入",
     "dim": [
      "d1",
      "d3"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "新技术验证与选型能力",
     "dim": [
      "d5"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Datacom"
    ],
    "after_join": [
     "HCIP-Datacom",
     "HCIE-Datacom",
     "网络规划设计师（软考高级）"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "数字安防网络隔离与VLAN划分",
    "数字安防网络高可用部署与优化"
   ],
   "jd_basis": "华为生态伙伴、大型企业信息化部门的网络架构岗位通用要求"
  },
  {
   "job_id": "dc-campus",
   "name": "园区网实施工程师",
   "direction": "华为Datacom数通",
   "family": "网络工程类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d1": 0.3,
    "d2": 0.3,
    "d4": 0.2,
    "d5": 0.2
   },
   "core_tags": [
    {
     "tag": "园区网整体组网方案",
     "dim": [
      "d5"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "VLAN规划与业务隔离",
     "dim": [
      "d2"
     ],
     "level": "精通",
     "source": "course",
     "weight": 0.098
    },
    {
     "tag": "Access/Trunk端口配置",
     "dim": [
      "d2"
     ],
     "level": "精通",
     "source": "course",
     "weight": 0.092
    },
    {
     "tag": "IP地址与网段规划",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "course",
     "weight": 0.087
    },
    {
     "tag": "路由协议配置（OSPF/BGP）",
     "dim": [
      "d1",
      "d4"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "静态路由与默认路由规划",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "DHCP与DNS服务配置",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "NAT与公网地址规划",
     "dim": [
      "d1",
      "d13"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "网络拓扑与分层架构设计",
     "dim": [
      "d5",
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "WLAN无线组网与调优",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "广域网与专线接入",
     "dim": [
      "d1",
      "d3"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.056
    },
    {
     "tag": "eNSP/eNSP Pro仿真验证",
     "dim": [
      "d1",
      "d2"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.051
    },
    {
     "tag": "链路聚合（Eth-Trunk/LACP）",
     "dim": [
      "d3",
      "d2"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.047
    },
    {
     "tag": "ACL访问控制列表配置",
     "dim": [
      "d13",
      "d2"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "标准化作业与规范意识",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Datacom",
     "网络管理员（软考初级）"
    ],
    "after_join": [
     "HCIP-Datacom"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "数字安防网络隔离与VLAN划分"
   ],
   "jd_basis": "华为生态伙伴与系统集成商的园区网实施岗位通用要求"
  },
  {
   "job_id": "dc-dcn",
   "name": "数据中心网络工程师",
   "direction": "华为Datacom数通",
   "family": "网络工程类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d5": 0.3,
    "d3": 0.3,
    "d1": 0.25,
    "d4": 0.15
   },
   "core_tags": [
    {
     "tag": "数据中心网络（Spine-Leaf）",
     "dim": [
      "d5",
      "d3"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "高可用与容灾架构设计",
     "dim": [
      "d3",
      "d5"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "VRRP网关冗余部署",
     "dim": [
      "d3"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "链路聚合（Eth-Trunk/LACP）",
     "dim": [
      "d3",
      "d2"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.087
    },
    {
     "tag": "网络拓扑与分层架构设计",
     "dim": [
      "d5",
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "园区网整体组网方案",
     "dim": [
      "d5"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "SDN控制器与网络编排",
     "dim": [
      "d9",
      "d5"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "网络设备选型与配置清单",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.068
    },
    {
     "tag": "技术方案文档编制",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "广域网与专线接入",
     "dim": [
      "d1",
      "d3"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "路由协议配置（OSPF/BGP）",
     "dim": [
      "d1",
      "d4"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.056
    },
    {
     "tag": "静态路由与默认路由规划",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.051
    },
    {
     "tag": "DHCP与DNS服务配置",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.047
    },
    {
     "tag": "NAT与公网地址规划",
     "dim": [
      "d1",
      "d13"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "网络变更实施与回退预案",
     "dim": [
      "d6",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Datacom"
    ],
    "after_join": [
     "HCIP-Datacom",
     "HCIE-Datacom"
    ]
   },
   "course_map": [
    "数字安防网络高可用部署与优化",
    "数字安防网络需求分析与基础网络搭建"
   ],
   "jd_basis": "互联网企业、云服务商与运营商数据中心网络岗位通用要求"
  },
  {
   "job_id": "dc-wlan",
   "name": "无线网络WLAN工程师",
   "direction": "华为Datacom数通",
   "family": "网络工程类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d1": 0.35,
    "d6": 0.25,
    "d2": 0.2,
    "d5": 0.2
   },
   "core_tags": [
    {
     "tag": "WLAN无线组网与调优",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "网络性能分析与优化",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "DHCP与DNS服务配置",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "抓包分析（Wireshark）",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "路由协议配置（OSPF/BGP）",
     "dim": [
      "d1",
      "d4"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "静态路由与默认路由规划",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "NAT与公网地址规划",
     "dim": [
      "d1",
      "d13"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "IP地址与网段规划",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "course",
     "weight": 0.068
    },
    {
     "tag": "网络拓扑与分层架构设计",
     "dim": [
      "d5",
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "广域网与专线接入",
     "dim": [
      "d1",
      "d3"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "eNSP/eNSP Pro仿真验证",
     "dim": [
      "d1",
      "d2"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.056
    },
    {
     "tag": "QoS流量调度与保障",
     "dim": [
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.051
    },
    {
     "tag": "网络故障分层排查方法",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.047
    },
    {
     "tag": "SNMP与网管平台监控",
     "dim": [
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "客户沟通与服务意识",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "知识沉淀与案例归档",
     "dim": [
      "d14",
      "d6"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Datacom"
    ],
    "after_join": [
     "HCIP-Datacom",
     "厂商无线产品认证"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "数字安防网络项目运维与综合优化"
   ],
   "jd_basis": "华为生态伙伴、集成商无线事业部岗位通用要求"
  },
  {
   "job_id": "dc-sdwan",
   "name": "广域网与SD-WAN工程师",
   "direction": "华为Datacom数通",
   "family": "网络工程类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d1": 0.3,
    "d5": 0.25,
    "d3": 0.25,
    "d6": 0.2
   },
   "core_tags": [
    {
     "tag": "广域网与专线接入",
     "dim": [
      "d1",
      "d3"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "SDN控制器与网络编排",
     "dim": [
      "d9",
      "d5"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "QoS流量调度与保障",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "防火墙与VPN部署",
     "dim": [
      "d13"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.087
    },
    {
     "tag": "路由协议配置（OSPF/BGP）",
     "dim": [
      "d1",
      "d4"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "静态路由与默认路由规划",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "DHCP与DNS服务配置",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "NAT与公网地址规划",
     "dim": [
      "d1",
      "d13"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "IP地址与网段规划",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "course",
     "weight": 0.064
    },
    {
     "tag": "网络拓扑与分层架构设计",
     "dim": [
      "d5",
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "WLAN无线组网与调优",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.056
    },
    {
     "tag": "eNSP/eNSP Pro仿真验证",
     "dim": [
      "d1",
      "d2"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.051
    },
    {
     "tag": "园区网整体组网方案",
     "dim": [
      "d5"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.047
    },
    {
     "tag": "数据中心网络（Spine-Leaf）",
     "dim": [
      "d5",
      "d3"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "网络变更实施与回退预案",
     "dim": [
      "d6",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Datacom"
    ],
    "after_join": [
     "HCIP-Datacom",
     "厂商SD-WAN产品认证"
    ]
   },
   "course_map": [
    "数字安防网络高可用部署与优化",
    "数字安防网络需求分析与基础网络搭建"
   ],
   "jd_basis": "连锁企业、金融机构与政务专网的广域网岗位通用要求"
  },
  {
   "job_id": "dc-route",
   "name": "路由协议工程师",
   "direction": "华为Datacom数通",
   "family": "网络工程类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d4": 0.3,
    "d1": 0.3,
    "d6": 0.2,
    "d5": 0.2
   },
   "core_tags": [
    {
     "tag": "路由协议配置（OSPF/BGP）",
     "dim": [
      "d1",
      "d4"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "静态路由与默认路由规划",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "网络故障分层排查方法",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "STP/RSTP/MSTP防环配置",
     "dim": [
      "d4"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.087
    },
    {
     "tag": "DHCP与DNS服务配置",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "NAT与公网地址规划",
     "dim": [
      "d1",
      "d13"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "IP地址与网段规划",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "course",
     "weight": 0.073
    },
    {
     "tag": "网络拓扑与分层架构设计",
     "dim": [
      "d5",
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "WLAN无线组网与调优",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "广域网与专线接入",
     "dim": [
      "d1",
      "d3"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "eNSP/eNSP Pro仿真验证",
     "dim": [
      "d1",
      "d2"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.056
    },
    {
     "tag": "QoS流量调度与保障",
     "dim": [
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.051
    },
    {
     "tag": "网络性能分析与优化",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.047
    },
    {
     "tag": "抓包分析（Wireshark）",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    },
    {
     "tag": "客户沟通与服务意识",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Datacom",
     "网络管理员（软考初级）"
    ],
    "after_join": [
     "HCIP-Datacom",
     "网络工程师（软考中级）"
    ]
   },
   "course_map": [
    "数字安防网络隔离与VLAN划分",
    "数字安防网络需求分析与基础网络搭建"
   ],
   "jd_basis": "运营商、大型企业与集成商数通技术岗位通用要求"
  },
  {
   "job_id": "dc-switch",
   "name": "交换网络工程师",
   "direction": "华为Datacom数通",
   "family": "网络工程类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d2": 0.35,
    "d4": 0.25,
    "d3": 0.2,
    "d1": 0.2
   },
   "core_tags": [
    {
     "tag": "VLAN规划与业务隔离",
     "dim": [
      "d2"
     ],
     "level": "精通",
     "source": "course",
     "weight": 0.103
    },
    {
     "tag": "STP/RSTP/MSTP防环配置",
     "dim": [
      "d4"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "链路聚合（Eth-Trunk/LACP）",
     "dim": [
      "d3",
      "d2"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "VRRP网关冗余部署",
     "dim": [
      "d3"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.087
    },
    {
     "tag": "Access/Trunk端口配置",
     "dim": [
      "d2"
     ],
     "level": "精通",
     "source": "course",
     "weight": 0.081
    },
    {
     "tag": "ACL访问控制列表配置",
     "dim": [
      "d13",
      "d2"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "eNSP/eNSP Pro仿真验证",
     "dim": [
      "d1",
      "d2"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "路由协议配置（OSPF/BGP）",
     "dim": [
      "d1",
      "d4"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "数据中心网络（Spine-Leaf）",
     "dim": [
      "d5",
      "d3"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "广域网与专线接入",
     "dim": [
      "d1",
      "d3"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "高可用与容灾架构设计",
     "dim": [
      "d3",
      "d5"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.056
    },
    {
     "tag": "静态路由与默认路由规划",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.051
    },
    {
     "tag": "DHCP与DNS服务配置",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.047
    },
    {
     "tag": "NAT与公网地址规划",
     "dim": [
      "d1",
      "d13"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "华为eNSP仿真验证",
     "dim": [
      "d1",
      "d2"
     ],
     "source": "cert"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Datacom",
     "网络管理员（软考初级）"
    ],
    "after_join": [
     "HCIP-Datacom",
     "网络工程师（软考中级）"
    ]
   },
   "course_map": [
    "数字安防网络隔离与VLAN划分",
    "数字安防网络高可用部署与优化"
   ],
   "jd_basis": "华为生态伙伴、集成商与甲方信息化部门的交换网络岗位通用要求"
  },
  {
   "job_id": "dc-sec-policy",
   "name": "网络安全策略工程师",
   "direction": "华为Datacom数通",
   "family": "网络安全类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d1": 0.3,
    "d2": 0.25,
    "d5": 0.25,
    "d6": 0.2
   },
   "core_tags": [
    {
     "tag": "安全策略与等保合规配置",
     "dim": [
      "d13"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "防火墙与VPN部署",
     "dim": [
      "d13"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "ACL访问控制列表配置",
     "dim": [
      "d13",
      "d2"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "NAT与公网地址规划",
     "dim": [
      "d1",
      "d13"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.087
    },
    {
     "tag": "路由协议配置（OSPF/BGP）",
     "dim": [
      "d1",
      "d4"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "静态路由与默认路由规划",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "DHCP与DNS服务配置",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "IP地址与网段规划",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "course",
     "weight": 0.068
    },
    {
     "tag": "网络拓扑与分层架构设计",
     "dim": [
      "d5",
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "WLAN无线组网与调优",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "广域网与专线接入",
     "dim": [
      "d1",
      "d3"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.056
    },
    {
     "tag": "eNSP/eNSP Pro仿真验证",
     "dim": [
      "d1",
      "d2"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.051
    },
    {
     "tag": "VLAN规划与业务隔离",
     "dim": [
      "d2"
     ],
     "level": "精通",
     "source": "course",
     "weight": 0.047
    },
    {
     "tag": "Access/Trunk端口配置",
     "dim": [
      "d2"
     ],
     "level": "精通",
     "source": "course",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "安全生产与合规意识",
     "dim": [
      "d13",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档编制",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Datacom",
     "HCIA-Security"
    ],
    "after_join": [
     "HCIP-Security",
     "CISP"
    ]
   },
   "course_map": [
    "数字安防网络隔离与VLAN划分",
    "数字安防网络需求分析与基础网络搭建"
   ],
   "jd_basis": "安全厂商、集成商安全事业部与甲方安全部门岗位通用要求"
  },
  {
   "job_id": "dc-sec-ops",
   "name": "安全运维工程师",
   "direction": "华为Datacom数通",
   "family": "网络安全类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d6": 0.4,
    "d1": 0.25,
    "d2": 0.2,
    "d3": 0.15
   },
   "core_tags": [
    {
     "tag": "入侵检测与日志审计",
     "dim": [
      "d13",
      "d6"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "应急响应与故障复盘",
     "dim": [
      "d6",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "SNMP与网管平台监控",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "网络故障分层排查方法",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.087
    },
    {
     "tag": "QoS流量调度与保障",
     "dim": [
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "WLAN无线组网与调优",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "网络性能分析与优化",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "抓包分析（Wireshark）",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.068
    },
    {
     "tag": "网络变更实施与回退预案",
     "dim": [
      "d6",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "驻场运维服务保障",
     "dim": [
      "d6",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "路由协议配置（OSPF/BGP）",
     "dim": [
      "d1",
      "d4"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.056
    },
    {
     "tag": "静态路由与默认路由规划",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.051
    },
    {
     "tag": "DHCP与DNS服务配置",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.047
    },
    {
     "tag": "NAT与公网地址规划",
     "dim": [
      "d1",
      "d13"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "运维文档与SOP编制",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "知识沉淀与案例归档",
     "dim": [
      "d14",
      "d6"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Datacom",
     "HCIA-Security"
    ],
    "after_join": [
     "HCIP-Security",
     "CISAW"
    ]
   },
   "course_map": [
    "数字安防网络项目运维与综合优化",
    "数字安防网络高可用部署与优化"
   ],
   "jd_basis": "安全服务商、甲方安全运营中心岗位通用要求"
  },
  {
   "job_id": "dc-compliance",
   "name": "等保合规与测评工程师",
   "direction": "华为Datacom数通",
   "family": "网络安全类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d5": 0.35,
    "d6": 0.25,
    "d1": 0.25,
    "d2": 0.15
   },
   "core_tags": [
    {
     "tag": "安全策略与等保合规配置",
     "dim": [
      "d13"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "技术方案文档编制",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "入侵检测与日志审计",
     "dim": [
      "d13",
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "网络拓扑与分层架构设计",
     "dim": [
      "d5",
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.087
    },
    {
     "tag": "园区网整体组网方案",
     "dim": [
      "d5"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "数据中心网络（Spine-Leaf）",
     "dim": [
      "d5",
      "d3"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "SDN控制器与网络编排",
     "dim": [
      "d9",
      "d5"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "高可用与容灾架构设计",
     "dim": [
      "d3",
      "d5"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "网络设备选型与配置清单",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "QoS流量调度与保障",
     "dim": [
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "WLAN无线组网与调优",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.056
    },
    {
     "tag": "网络性能分析与优化",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.051
    },
    {
     "tag": "网络故障分层排查方法",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.047
    },
    {
     "tag": "抓包分析（Wireshark）",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "需求理解与转化能力",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "数据报告撰写与汇报",
     "dim": [
      "d14",
      "d5"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Security",
     "网络安全管理员"
    ],
    "after_join": [
     "CISP",
     "等保测评师"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "数字安防网络项目运维与综合优化"
   ],
   "jd_basis": "等保测评机构、安全咨询公司与甲方合规部门岗位通用要求"
  },
  {
   "job_id": "dc-netdevops",
   "name": "网络自动化运维工程师",
   "direction": "华为Datacom数通",
   "family": "网络运维类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d9": 0.3,
    "d6": 0.3,
    "d1": 0.2,
    "d2": 0.2
   },
   "core_tags": [
    {
     "tag": "网络自动化脚本开发（Python）",
     "dim": [
      "d9"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "NetConf/YANG配置管理",
     "dim": [
      "d9"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "自动化运维（Ansible）",
     "dim": [
      "d9",
      "d7"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "SNMP与网管平台监控",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.087
    },
    {
     "tag": "SDN控制器与网络编排",
     "dim": [
      "d9",
      "d5"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "QoS流量调度与保障",
     "dim": [
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "WLAN无线组网与调优",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "网络性能分析与优化",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "网络故障分层排查方法",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "抓包分析（Wireshark）",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "网络变更实施与回退预案",
     "dim": [
      "d6",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "入侵检测与日志审计",
     "dim": [
      "d13",
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.051
    },
    {
     "tag": "驻场运维服务保障",
     "dim": [
      "d6",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "应急响应与故障复盘",
     "dim": [
      "d6",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "CI/CD流水线建设",
     "dim": [
      "d9"
     ],
     "source": "industry"
    },
    {
     "tag": "运维文档与SOP编制",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Datacom",
     "Python基础能力"
    ],
    "after_join": [
     "HCIP-Datacom",
     "HCIE-Datacom",
     "DevOps工程师认证"
    ]
   },
   "course_map": [
    "数字安防网络项目运维与综合优化",
    "数字安防网络高可用部署与优化"
   ],
   "jd_basis": "运营商、互联网企业与大型企业网络自动化岗位通用要求"
  },
  {
   "job_id": "dc-monitor",
   "name": "网络监控与性能优化工程师",
   "direction": "华为Datacom数通",
   "family": "网络运维类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d6": 0.4,
    "d2": 0.2,
    "d4": 0.2,
    "d3": 0.2
   },
   "core_tags": [
    {
     "tag": "SNMP与网管平台监控",
     "dim": [
      "d6"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "网络性能分析与优化",
     "dim": [
      "d6"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "QoS流量调度与保障",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "抓包分析（Wireshark）",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "WLAN无线组网与调优",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "网络故障分层排查方法",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "网络变更实施与回退预案",
     "dim": [
      "d6",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "入侵检测与日志审计",
     "dim": [
      "d13",
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "驻场运维服务保障",
     "dim": [
      "d6",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "应急响应与故障复盘",
     "dim": [
      "d6",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "VLAN规划与业务隔离",
     "dim": [
      "d2"
     ],
     "level": "精通",
     "source": "course",
     "weight": 0.056
    },
    {
     "tag": "Access/Trunk端口配置",
     "dim": [
      "d2"
     ],
     "level": "精通",
     "source": "course",
     "weight": 0.051
    },
    {
     "tag": "链路聚合（Eth-Trunk/LACP）",
     "dim": [
      "d3",
      "d2"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.047
    },
    {
     "tag": "ACL访问控制列表配置",
     "dim": [
      "d13",
      "d2"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "监控告警体系（Prometheus/Zabbix）",
     "dim": [
      "d6",
      "d9"
     ],
     "source": "industry"
    },
    {
     "tag": "数据报告撰写与汇报",
     "dim": [
      "d14",
      "d5"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Datacom",
     "网络管理员（软考初级）"
    ],
    "after_join": [
     "HCIP-Datacom",
     "网络工程师（软考中级）"
    ]
   },
   "course_map": [
    "数字安防网络项目运维与综合优化",
    "数字安防网络高可用部署与优化"
   ],
   "jd_basis": "运营商、大型企业网络监控中心岗位通用要求"
  },
  {
   "job_id": "dc-presales",
   "name": "数通售前解决方案工程师",
   "direction": "华为Datacom数通",
   "family": "技术支持与售前类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d5": 0.4,
    "d1": 0.25,
    "d2": 0.2,
    "d4": 0.15
   },
   "core_tags": [
    {
     "tag": "网络拓扑与分层架构设计",
     "dim": [
      "d5",
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "网络设备选型与配置清单",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "技术方案文档编制",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "园区网整体组网方案",
     "dim": [
      "d5"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.087
    },
    {
     "tag": "数据中心网络（Spine-Leaf）",
     "dim": [
      "d5",
      "d3"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "SDN控制器与网络编排",
     "dim": [
      "d9",
      "d5"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "高可用与容灾架构设计",
     "dim": [
      "d3",
      "d5"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "路由协议配置（OSPF/BGP）",
     "dim": [
      "d1",
      "d4"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "静态路由与默认路由规划",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "DHCP与DNS服务配置",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "NAT与公网地址规划",
     "dim": [
      "d1",
      "d13"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.056
    },
    {
     "tag": "IP地址与网段规划",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "course",
     "weight": 0.051
    },
    {
     "tag": "WLAN无线组网与调优",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.047
    },
    {
     "tag": "广域网与专线接入",
     "dim": [
      "d1",
      "d3"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "技术演示与培训能力",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "成本控制与资源统筹",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Datacom"
    ],
    "after_join": [
     "HCIP-Datacom",
     "PMP"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "数字安防网络隔离与VLAN划分"
   ],
   "jd_basis": "华为生态伙伴与数通厂商售前技术体系岗位通用要求"
  },
  {
   "job_id": "dc-onsite",
   "name": "驻场运维工程师",
   "direction": "华为Datacom数通",
   "family": "网络运维类",
   "status": "active",
   "matchable": true,
   "dim_weights": {
    "d6": 0.4,
    "d1": 0.25,
    "d2": 0.2,
    "d5": 0.15
   },
   "core_tags": [
    {
     "tag": "驻场运维服务保障",
     "dim": [
      "d6",
      "d14"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "网络变更实施与回退预案",
     "dim": [
      "d6",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "应急响应与故障复盘",
     "dim": [
      "d6",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "设备巡检标准化作业",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "QoS流量调度与保障",
     "dim": [
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "WLAN无线组网与调优",
     "dim": [
      "d1",
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "网络性能分析与优化",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "网络故障分层排查方法",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "抓包分析（Wireshark）",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "SNMP与网管平台监控",
     "dim": [
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "入侵检测与日志审计",
     "dim": [
      "d13",
      "d6"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.056
    },
    {
     "tag": "路由协议配置（OSPF/BGP）",
     "dim": [
      "d1",
      "d4"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.051
    },
    {
     "tag": "静态路由与默认路由规划",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.047
    },
    {
     "tag": "DHCP与DNS服务配置",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "客户沟通与服务意识",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "知识沉淀与案例归档",
     "dim": [
      "d14",
      "d6"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Datacom",
     "网络管理员（软考初级）"
    ],
    "after_join": [
     "HCIP-Datacom",
     "ITIL基础认证"
    ]
   },
   "course_map": [
    "数字安防网络项目运维与综合优化"
   ],
   "jd_basis": "运维服务商与集成商驻场服务体系岗位通用要求"
  },
  {
   "job_id": "cl-ops",
   "name": "云平台运维工程师",
   "direction": "云计算",
   "family": "云与运维类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d8": 0.3,
    "d7": 0.25,
    "d6": 0.25,
    "d1": 0.2
   },
   "core_tags": [
    {
     "tag": "云平台部署（FusionCompute/OpenStack）",
     "dim": [
      "d8"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "Linux系统管理与调优",
     "dim": [
      "d7"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "云平台故障处置",
     "dim": [
      "d6",
      "d8"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "备份与容灾策略",
     "dim": [
      "d3",
      "d8"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "虚拟化技术（KVM/VMware）",
     "dim": [
      "d8"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "容器与Docker基础",
     "dim": [
      "d8",
      "d7"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "Kubernetes集群运维",
     "dim": [
      "d8"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "云网络（VPC/安全组/负载均衡）",
     "dim": [
      "d8",
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "云存储（对象存储/块存储）",
     "dim": [
      "d8"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "云上迁移方案实施",
     "dim": [
      "d8",
      "d5"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "私有云/混合云方案设计",
     "dim": [
      "d8",
      "d5"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.056
    },
    {
     "tag": "云资源成本优化",
     "dim": [
      "d8",
      "d14"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "云安全与权限管理（IAM）",
     "dim": [
      "d13",
      "d8"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.047
    },
    {
     "tag": "云计算产品售前支持",
     "dim": [
      "d8",
      "d14"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "监控告警体系（Prometheus/Zabbix）",
     "dim": [
      "d6",
      "d9"
     ],
     "source": "industry"
    },
    {
     "tag": "运维文档与SOP编制",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Cloud Computing",
     "HCIA-Datacom"
    ],
    "after_join": [
     "HCIP-Cloud Computing",
     "RHCE"
    ]
   },
   "course_map": [
    "数字安防网络项目运维与综合优化",
    "数字安防网络高可用部署与优化",
    "Linux系统管理（拓展）"
   ],
   "jd_basis": "云服务商、甲方云平台运营部门与集成商云事业部岗位通用要求"
  },
  {
   "job_id": "cl-virt",
   "name": "虚拟化工程师",
   "direction": "云计算",
   "family": "云与运维类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d8": 0.35,
    "d7": 0.25,
    "d5": 0.2,
    "d1": 0.2
   },
   "core_tags": [
    {
     "tag": "虚拟化技术（KVM/VMware）",
     "dim": [
      "d8"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "云平台部署（FusionCompute/OpenStack）",
     "dim": [
      "d8"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "服务器硬件与RAID配置",
     "dim": [
      "d7"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "Linux系统管理与调优",
     "dim": [
      "d7"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.087
    },
    {
     "tag": "容器与Docker基础",
     "dim": [
      "d8",
      "d7"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "Kubernetes集群运维",
     "dim": [
      "d8"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "云网络（VPC/安全组/负载均衡）",
     "dim": [
      "d8",
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "云存储（对象存储/块存储）",
     "dim": [
      "d8"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "云上迁移方案实施",
     "dim": [
      "d8",
      "d5"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "私有云/混合云方案设计",
     "dim": [
      "d8",
      "d5"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "云资源成本优化",
     "dim": [
      "d8",
      "d14"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "云平台故障处置",
     "dim": [
      "d6",
      "d8"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "备份与容灾策略",
     "dim": [
      "d3",
      "d8"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "云安全与权限管理（IAM）",
     "dim": [
      "d13",
      "d8"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "新技术验证与选型能力",
     "dim": [
      "d5"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Cloud Computing"
    ],
    "after_join": [
     "HCIP-Cloud Computing",
     "VMware VCP"
    ]
   },
   "course_map": [
    "数字安防网络高可用部署与优化",
    "服务器虚拟化技术（拓展）"
   ],
   "jd_basis": "云服务商、IDC与甲方基础设施部门的虚拟化岗位通用要求"
  },
  {
   "job_id": "cl-k8s",
   "name": "容器与K8s运维工程师",
   "direction": "云计算",
   "family": "云与运维类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d8": 0.35,
    "d7": 0.25,
    "d9": 0.2,
    "d6": 0.2
   },
   "core_tags": [
    {
     "tag": "Kubernetes集群运维",
     "dim": [
      "d8"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "容器与Docker基础",
     "dim": [
      "d8",
      "d7"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "Linux系统管理与调优",
     "dim": [
      "d7"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "监控告警体系（Prometheus/Zabbix）",
     "dim": [
      "d6",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "虚拟化技术（KVM/VMware）",
     "dim": [
      "d8"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "云平台部署（FusionCompute/OpenStack）",
     "dim": [
      "d8"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "云网络（VPC/安全组/负载均衡）",
     "dim": [
      "d8",
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "云存储（对象存储/块存储）",
     "dim": [
      "d8"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "云上迁移方案实施",
     "dim": [
      "d8",
      "d5"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "私有云/混合云方案设计",
     "dim": [
      "d8",
      "d5"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "云资源成本优化",
     "dim": [
      "d8",
      "d14"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "云平台故障处置",
     "dim": [
      "d6",
      "d8"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "备份与容灾策略",
     "dim": [
      "d3",
      "d8"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "云安全与权限管理（IAM）",
     "dim": [
      "d13",
      "d8"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "CI/CD流水线建设",
     "dim": [
      "d9"
     ],
     "source": "industry"
    },
    {
     "tag": "自动化运维（Ansible）",
     "dim": [
      "d9",
      "d7"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Cloud Computing",
     "Linux基础能力"
    ],
    "after_join": [
     "CKA",
     "HCIP-Cloud Service"
    ]
   },
   "course_map": [
    "数字安防网络项目运维与综合优化",
    "容器与云原生技术（拓展）"
   ],
   "jd_basis": "互联网企业、云服务商与安防平台厂商云原生岗位通用要求"
  },
  {
   "job_id": "cl-net",
   "name": "云网络工程师",
   "direction": "云计算",
   "family": "云工程实施类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d1": 0.3,
    "d8": 0.25,
    "d5": 0.25,
    "d6": 0.2
   },
   "core_tags": [
    {
     "tag": "云网络（VPC/安全组/负载均衡）",
     "dim": [
      "d8",
      "d1"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "IP地址与网段规划",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "course",
     "weight": 0.098
    },
    {
     "tag": "网络拓扑与分层架构设计",
     "dim": [
      "d5",
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "广域网与专线接入",
     "dim": [
      "d1",
      "d3"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.087
    },
    {
     "tag": "虚拟化技术（KVM/VMware）",
     "dim": [
      "d8"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "云平台部署（FusionCompute/OpenStack）",
     "dim": [
      "d8"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "容器与Docker基础",
     "dim": [
      "d8",
      "d7"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "Kubernetes集群运维",
     "dim": [
      "d8"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "云存储（对象存储/块存储）",
     "dim": [
      "d8"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "云上迁移方案实施",
     "dim": [
      "d8",
      "d5"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "私有云/混合云方案设计",
     "dim": [
      "d8",
      "d5"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.056
    },
    {
     "tag": "云资源成本优化",
     "dim": [
      "d8",
      "d14"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "云平台故障处置",
     "dim": [
      "d6",
      "d8"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "备份与容灾策略",
     "dim": [
      "d3",
      "d8"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "云安全与权限管理（IAM）",
     "dim": [
      "d13",
      "d8"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档编制",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Datacom",
     "HCIA-Cloud Computing"
    ],
    "after_join": [
     "HCIP-Cloud Computing",
     "HCIP-Datacom"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "数字安防网络隔离与VLAN划分",
    "云计算网络（拓展）"
   ],
   "jd_basis": "云服务商、集成商云事业部与甲方云基础设施岗位通用要求"
  },
  {
   "job_id": "cl-idc",
   "name": "IDC机房运维工程师",
   "direction": "云计算",
   "family": "云与运维类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d6": 0.35,
    "d7": 0.25,
    "d1": 0.2,
    "d5": 0.2
   },
   "core_tags": [
    {
     "tag": "IDC机房巡检与设备维护",
     "dim": [
      "d7",
      "d6"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "服务器硬件与RAID配置",
     "dim": [
      "d7"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "机房建设与UPS供电",
     "dim": [
      "d1",
      "d3"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "设备巡检标准化作业",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "监控告警体系（Prometheus/Zabbix）",
     "dim": [
      "d6",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "日志采集与分析（ELK）",
     "dim": [
      "d6",
      "d10"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.077
    },
    {
     "tag": "云平台故障处置",
     "dim": [
      "d6",
      "d8"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "Linux系统管理与调优",
     "dim": [
      "d7"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "Shell脚本编写",
     "dim": [
      "d7",
      "d9"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "容器与Docker基础",
     "dim": [
      "d8",
      "d7"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "自动化运维（Ansible）",
     "dim": [
      "d9",
      "d7"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.056
    },
    {
     "tag": "云网络（VPC/安全组/负载均衡）",
     "dim": [
      "d8",
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.051
    },
    {
     "tag": "云上迁移方案实施",
     "dim": [
      "d8",
      "d5"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.047
    },
    {
     "tag": "私有云/混合云方案设计",
     "dim": [
      "d8",
      "d5"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "安全生产与合规意识",
     "dim": [
      "d13",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "标准化作业与规范意识",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "电工（低压）操作证",
     "安防系统运维检修员"
    ],
    "after_join": [
     "HCIA-Cloud Computing",
     "数据中心运维认证"
    ]
   },
   "course_map": [
    "数字安防网络项目运维与综合优化",
    "数字安防网络需求分析与基础网络搭建"
   ],
   "jd_basis": "IDC运营商、云服务商与自建数据中心企业的机房运维岗位通用要求"
  },
  {
   "job_id": "cl-migrate",
   "name": "云迁移实施工程师",
   "direction": "云计算",
   "family": "云工程实施类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d8": 0.3,
    "d5": 0.3,
    "d7": 0.2,
    "d6": 0.2
   },
   "core_tags": [
    {
     "tag": "云上迁移方案实施",
     "dim": [
      "d8",
      "d5"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "私有云/混合云方案设计",
     "dim": [
      "d8",
      "d5"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "Linux系统管理与调优",
     "dim": [
      "d7"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "备份与容灾策略",
     "dim": [
      "d3",
      "d8"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "虚拟化技术（KVM/VMware）",
     "dim": [
      "d8"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "云平台部署（FusionCompute/OpenStack）",
     "dim": [
      "d8"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "容器与Docker基础",
     "dim": [
      "d8",
      "d7"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "Kubernetes集群运维",
     "dim": [
      "d8"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "云网络（VPC/安全组/负载均衡）",
     "dim": [
      "d8",
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "云存储（对象存储/块存储）",
     "dim": [
      "d8"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "云资源成本优化",
     "dim": [
      "d8",
      "d14"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "云平台故障处置",
     "dim": [
      "d6",
      "d8"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "云安全与权限管理（IAM）",
     "dim": [
      "d13",
      "d8"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.047
    },
    {
     "tag": "云计算产品售前支持",
     "dim": [
      "d8",
      "d14"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "网络变更实施与回退预案",
     "dim": [
      "d6",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Cloud Computing"
    ],
    "after_join": [
     "HCIP-Cloud Computing",
     "PMP"
    ]
   },
   "course_map": [
    "数字安防网络高可用部署与优化",
    "云迁移技术（拓展）"
   ],
   "jd_basis": "云服务商迁移交付团队与集成商云工程岗位通用要求"
  },
  {
   "job_id": "cl-presales",
   "name": "云计算售前工程师",
   "direction": "云计算",
   "family": "技术支持与售前类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d8": 0.3,
    "d5": 0.3,
    "d14": 0.25,
    "d1": 0.15
   },
   "core_tags": [
    {
     "tag": "云计算产品售前支持",
     "dim": [
      "d8",
      "d14"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "私有云/混合云方案设计",
     "dim": [
      "d8",
      "d5"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "云资源成本优化",
     "dim": [
      "d8",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "技术方案文档编制",
     "dim": [
      "d5",
      "d14"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "虚拟化技术（KVM/VMware）",
     "dim": [
      "d8"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "云平台部署（FusionCompute/OpenStack）",
     "dim": [
      "d8"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "容器与Docker基础",
     "dim": [
      "d8",
      "d7"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "Kubernetes集群运维",
     "dim": [
      "d8"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "云网络（VPC/安全组/负载均衡）",
     "dim": [
      "d8",
      "d1"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "云存储（对象存储/块存储）",
     "dim": [
      "d8"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "云上迁移方案实施",
     "dim": [
      "d8",
      "d5"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.056
    },
    {
     "tag": "云平台故障处置",
     "dim": [
      "d6",
      "d8"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "备份与容灾策略",
     "dim": [
      "d3",
      "d8"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "云安全与权限管理（IAM）",
     "dim": [
      "d13",
      "d8"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "技术演示与培训能力",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "成本控制与资源统筹",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Cloud Service"
    ],
    "after_join": [
     "HCIP-Cloud Service",
     "PMP"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "云计算概论（拓展）"
   ],
   "jd_basis": "云服务商与集成商云售前技术体系岗位通用要求"
  },
  {
   "job_id": "bd-etl",
   "name": "ETL开发工程师",
   "direction": "大数据",
   "family": "数据开发类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d10": 0.4,
    "d9": 0.25,
    "d5": 0.2,
    "d7": 0.15
   },
   "core_tags": [
    {
     "tag": "ETL流程设计与实现",
     "dim": [
      "d10"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "数据清洗与质量校验",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "SQL数据查询与优化",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "调度系统（DolphinScheduler/Airflow）",
     "dim": [
      "d10",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "Python数据处理（Pandas）",
     "dim": [
      "d10",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "Hadoop生态基础（HDFS/MapReduce）",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "Spark离线计算开发",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "Flink实时计算开发",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "数据仓库建模（维度建模）",
     "dim": [
      "d10",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "Kafka消息队列应用",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "Hive数据查询与分区优化",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.056
    },
    {
     "tag": "BI可视化工具（Tableau/FineBI）",
     "dim": [
      "d10",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "ECharts数据可视化开发",
     "dim": [
      "d10",
      "d9"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "指标体系与数据口径设计",
     "dim": [
      "d10",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "Linux环境下集群部署",
     "dim": [
      "d7"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "SQL基础能力",
     "Python基础能力"
    ],
    "after_join": [
     "HCIA-Big Data",
     "软考数据库系统工程师"
    ]
   },
   "course_map": [
    "数据库技术（拓展）",
    "Python程序设计（拓展）"
   ],
   "jd_basis": "互联网企业、数据服务商与行业信息化部门数据开发岗位通用要求"
  },
  {
   "job_id": "bd-dw",
   "name": "数据仓库建模工程师",
   "direction": "大数据",
   "family": "数据开发类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d10": 0.35,
    "d5": 0.35,
    "d9": 0.15,
    "d7": 0.15
   },
   "core_tags": [
    {
     "tag": "数据仓库建模（维度建模）",
     "dim": [
      "d10",
      "d5"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "指标体系与数据口径设计",
     "dim": [
      "d10",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "Hive数据查询与分区优化",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "SQL数据查询与优化",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "Python数据处理（Pandas）",
     "dim": [
      "d10",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "Hadoop生态基础（HDFS/MapReduce）",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "Spark离线计算开发",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "Flink实时计算开发",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "ETL流程设计与实现",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "数据清洗与质量校验",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "调度系统（DolphinScheduler/Airflow）",
     "dim": [
      "d10",
      "d9"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "Kafka消息队列应用",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "BI可视化工具（Tableau/FineBI）",
     "dim": [
      "d10",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "ECharts数据可视化开发",
     "dim": [
      "d10",
      "d9"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "数据治理与元数据管理",
     "dim": [
      "d10",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "业务需求分析与数据支撑",
     "dim": [
      "d10",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "SQL基础能力"
    ],
    "after_join": [
     "HCIP-Big Data",
     "软考数据库系统工程师"
    ]
   },
   "course_map": [
    "数据库技术（拓展）",
    "数据仓库原理（拓展）"
   ],
   "jd_basis": "互联网企业、数据中台建设单位与行业数据中心岗位通用要求"
  },
  {
   "job_id": "bd-realtime",
   "name": "实时计算开发工程师",
   "direction": "大数据",
   "family": "数据开发类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d10": 0.35,
    "d9": 0.3,
    "d6": 0.2,
    "d5": 0.15
   },
   "core_tags": [
    {
     "tag": "Flink实时计算开发",
     "dim": [
      "d10"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "Kafka消息队列应用",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "Spark离线计算开发",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "Python数据处理（Pandas）",
     "dim": [
      "d10",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "SQL数据查询与优化",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "Hadoop生态基础（HDFS/MapReduce）",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "数据仓库建模（维度建模）",
     "dim": [
      "d10",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "ETL流程设计与实现",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.068
    },
    {
     "tag": "数据清洗与质量校验",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "调度系统（DolphinScheduler/Airflow）",
     "dim": [
      "d10",
      "d9"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "Hive数据查询与分区优化",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.056
    },
    {
     "tag": "BI可视化工具（Tableau/FineBI）",
     "dim": [
      "d10",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "ECharts数据可视化开发",
     "dim": [
      "d10",
      "d9"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "指标体系与数据口径设计",
     "dim": [
      "d10",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "监控告警体系（Prometheus/Zabbix）",
     "dim": [
      "d6",
      "d9"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "Java/Python编程基础"
    ],
    "after_join": [
     "HCIP-Big Data",
     "软考软件设计师"
    ]
   },
   "course_map": [
    "大数据技术基础（拓展）",
    "实时计算与流处理（拓展）"
   ],
   "jd_basis": "互联网企业、实时风控与智能安防平台厂商实时计算岗位通用要求"
  },
  {
   "job_id": "bd-bi",
   "name": "BI可视化工程师",
   "direction": "大数据",
   "family": "数据分析治理类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d10": 0.35,
    "d5": 0.3,
    "d9": 0.2,
    "d14": 0.15
   },
   "core_tags": [
    {
     "tag": "BI可视化工具（Tableau/FineBI）",
     "dim": [
      "d10",
      "d5"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "ECharts数据可视化开发",
     "dim": [
      "d10",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "SQL数据查询与优化",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "指标体系与数据口径设计",
     "dim": [
      "d10",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "Python数据处理（Pandas）",
     "dim": [
      "d10",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "Hadoop生态基础（HDFS/MapReduce）",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "Spark离线计算开发",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "Flink实时计算开发",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "数据仓库建模（维度建模）",
     "dim": [
      "d10",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "ETL流程设计与实现",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "数据清洗与质量校验",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "调度系统（DolphinScheduler/Airflow）",
     "dim": [
      "d10",
      "d9"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "Kafka消息队列应用",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "Hive数据查询与分区优化",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "业务需求分析与数据支撑",
     "dim": [
      "d10",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "数据报告撰写与汇报",
     "dim": [
      "d14",
      "d5"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "帆软FineBI认证工程师",
     "SQL基础能力"
    ],
    "after_join": [
     "Tableau Desktop Specialist",
     "CDA数据分析师"
    ]
   },
   "course_map": [
    "数据可视化技术（拓展）",
    "数据库技术（拓展）"
   ],
   "jd_basis": "企业数据分析部门、BI服务商与监控大屏建设单位岗位通用要求"
  },
  {
   "job_id": "bd-gov",
   "name": "数据治理工程师",
   "direction": "大数据",
   "family": "数据分析治理类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d10": 0.3,
    "d14": 0.3,
    "d13": 0.2,
    "d5": 0.2
   },
   "core_tags": [
    {
     "tag": "数据治理与元数据管理",
     "dim": [
      "d10",
      "d14"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "数据安全与脱敏规范",
     "dim": [
      "d13",
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "数据清洗与质量校验",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "指标体系与数据口径设计",
     "dim": [
      "d10",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "SQL数据查询与优化",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "Python数据处理（Pandas）",
     "dim": [
      "d10",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.077
    },
    {
     "tag": "Hadoop生态基础（HDFS/MapReduce）",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "Spark离线计算开发",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "Flink实时计算开发",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "数据仓库建模（维度建模）",
     "dim": [
      "d10",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "ETL流程设计与实现",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "调度系统（DolphinScheduler/Airflow）",
     "dim": [
      "d10",
      "d9"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "Kafka消息队列应用",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "Hive数据查询与分区优化",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "安全策略与等保合规配置",
     "dim": [
      "d13"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Big Data",
     "SQL基础能力"
    ],
    "after_join": [
     "CDGA数据治理工程师",
     "DAMA认证"
    ]
   },
   "course_map": [
    "数据库技术（拓展）",
    "数据安全与合规（拓展）"
   ],
   "jd_basis": "大型企业数据管理部门、政务数据局与数据服务商岗位通用要求"
  },
  {
   "job_id": "bd-analyst",
   "name": "数据分析师",
   "direction": "大数据",
   "family": "数据分析治理类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d10": 0.35,
    "d5": 0.3,
    "d14": 0.2,
    "d9": 0.15
   },
   "core_tags": [
    {
     "tag": "业务需求分析与数据支撑",
     "dim": [
      "d10",
      "d14"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "SQL数据查询与优化",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "Python数据处理（Pandas）",
     "dim": [
      "d10",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "数据报告撰写与汇报",
     "dim": [
      "d14",
      "d5"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "Hadoop生态基础（HDFS/MapReduce）",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "Spark离线计算开发",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "Flink实时计算开发",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "数据仓库建模（维度建模）",
     "dim": [
      "d10",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.068
    },
    {
     "tag": "ETL流程设计与实现",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "数据清洗与质量校验",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "调度系统（DolphinScheduler/Airflow）",
     "dim": [
      "d10",
      "d9"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "Kafka消息队列应用",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "Hive数据查询与分区优化",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.047
    },
    {
     "tag": "BI可视化工具（Tableau/FineBI）",
     "dim": [
      "d10",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "客户沟通与服务意识",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "CDA数据分析师（一级）",
     "SQL基础能力"
    ],
    "after_join": [
     "CPDA数据分析师",
     "帆软FineBI认证"
    ]
   },
   "course_map": [
    "数据分析基础（拓展）",
    "数据库技术（拓展）"
   ],
   "jd_basis": "企业运营分析部门、互联网公司与咨询机构数据分析岗位通用要求"
  },
  {
   "job_id": "bd-platform",
   "name": "大数据平台运维工程师",
   "direction": "大数据",
   "family": "数据开发类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d10": 0.3,
    "d7": 0.3,
    "d6": 0.25,
    "d8": 0.15
   },
   "core_tags": [
    {
     "tag": "大数据平台运维",
     "dim": [
      "d10",
      "d7"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "Hadoop生态基础（HDFS/MapReduce）",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "Linux环境下集群部署",
     "dim": [
      "d7"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "日志采集与分析（ELK）",
     "dim": [
      "d6",
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "SQL数据查询与优化",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "Python数据处理（Pandas）",
     "dim": [
      "d10",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.077
    },
    {
     "tag": "Spark离线计算开发",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "Flink实时计算开发",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "数据仓库建模（维度建模）",
     "dim": [
      "d10",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "ETL流程设计与实现",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "数据清洗与质量校验",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "调度系统（DolphinScheduler/Airflow）",
     "dim": [
      "d10",
      "d9"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "Kafka消息队列应用",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "Hive数据查询与分区优化",
     "dim": [
      "d10"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "监控告警体系（Prometheus/Zabbix）",
     "dim": [
      "d6",
      "d9"
     ],
     "source": "industry"
    },
    {
     "tag": "备份与容灾策略",
     "dim": [
      "d3",
      "d8"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Big Data",
     "Linux基础能力"
    ],
    "after_join": [
     "HCIP-Big Data",
     "RHCE"
    ]
   },
   "course_map": [
    "数字安防网络项目运维与综合优化",
    "大数据平台技术（拓展）"
   ],
   "jd_basis": "大数据平台建设方、云服务商与行业数据中心运维岗位通用要求"
  },
  {
   "job_id": "ai-deploy",
   "name": "AI模型部署工程师",
   "direction": "AI人工智能",
   "family": "AI应用类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d11": 0.35,
    "d8": 0.25,
    "d9": 0.2,
    "d6": 0.2
   },
   "core_tags": [
    {
     "tag": "模型部署与推理服务（ONNX/TensorRT）",
     "dim": [
      "d11",
      "d8"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "昇腾AI生态与MindSpore",
     "dim": [
      "d11"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "边缘计算与端侧AI部署",
     "dim": [
      "d11",
      "d12"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "Linux系统管理与调优",
     "dim": [
      "d7"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.087
    },
    {
     "tag": "机器学习算法基础",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "深度学习框架（PyTorch/TensorFlow）",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "计算机视觉（目标检测/识别）",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "自然语言处理基础",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "大模型API调用与提示词工程",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "模型训练与调优",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "AI训练数据标注与治理",
     "dim": [
      "d11",
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "数据集划分与质量评估",
     "dim": [
      "d11",
      "d10"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "AI平台运维（GPU资源调度）",
     "dim": [
      "d11",
      "d8"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "RAG检索增强应用开发",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "容器与Docker基础",
     "dim": [
      "d8",
      "d7"
     ],
     "source": "cert"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-AI",
     "Python基础能力"
    ],
    "after_join": [
     "HCIP-AI",
     "昇腾AI认证"
    ]
   },
   "course_map": [
    "人工智能基础（拓展）",
    "数字安防网络项目运维与综合优化"
   ],
   "jd_basis": "AI厂商、智能安防平台厂商与算法工程化团队岗位通用要求"
  },
  {
   "job_id": "ai-cv",
   "name": "计算机视觉应用工程师",
   "direction": "AI人工智能",
   "family": "AI应用类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d11": 0.35,
    "d1": 0.25,
    "d6": 0.2,
    "d5": 0.2
   },
   "core_tags": [
    {
     "tag": "计算机视觉（目标检测/识别）",
     "dim": [
      "d11"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "智能安防场景AI应用（视频分析）",
     "dim": [
      "d11",
      "d1"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "视频结构化与智能分析应用",
     "dim": [
      "d1",
      "d11"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "深度学习框架（PyTorch/TensorFlow）",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.087
    },
    {
     "tag": "机器学习算法基础",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "自然语言处理基础",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "大模型API调用与提示词工程",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.073
    },
    {
     "tag": "模型训练与调优",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "模型部署与推理服务（ONNX/TensorRT）",
     "dim": [
      "d11",
      "d8"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "边缘计算与端侧AI部署",
     "dim": [
      "d11",
      "d12"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "AI训练数据标注与治理",
     "dim": [
      "d11",
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "数据集划分与质量评估",
     "dim": [
      "d11",
      "d10"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "AI平台运维（GPU资源调度）",
     "dim": [
      "d11",
      "d8"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "RAG检索增强应用开发",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "人脸识别与车牌识别集成",
     "dim": [
      "d11"
     ],
     "source": "industry"
    },
    {
     "tag": "算法效果评估与AB测试",
     "dim": [
      "d11",
      "d10"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-AI",
     "安防系统安装调试员"
    ],
    "after_join": [
     "HCIP-AI",
     "软考软件设计师"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "人工智能基础（拓展）"
   ],
   "jd_basis": "安防厂商智能产品线、AI算法公司与智慧城市建设单位岗位通用要求"
  },
  {
   "job_id": "ai-llm",
   "name": "大模型应用开发工程师",
   "direction": "AI人工智能",
   "family": "AI应用类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d11": 0.3,
    "d9": 0.3,
    "d5": 0.2,
    "d10": 0.2
   },
   "core_tags": [
    {
     "tag": "大模型API调用与提示词工程",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "RAG检索增强应用开发",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "AI应用集成与接口开发",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "Python编程基础",
     "dim": [
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "机器学习算法基础",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "深度学习框架（PyTorch/TensorFlow）",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "计算机视觉（目标检测/识别）",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "自然语言处理基础",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "模型训练与调优",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "模型部署与推理服务（ONNX/TensorRT）",
     "dim": [
      "d11",
      "d8"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "边缘计算与端侧AI部署",
     "dim": [
      "d11",
      "d12"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "AI训练数据标注与治理",
     "dim": [
      "d11",
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "数据集划分与质量评估",
     "dim": [
      "d11",
      "d10"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "AI平台运维（GPU资源调度）",
     "dim": [
      "d11",
      "d8"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "SQL数据查询与优化",
     "dim": [
      "d10"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-AI",
     "Python基础能力"
    ],
    "after_join": [
     "软考软件设计师",
     "大模型应用开发认证"
    ]
   },
   "course_map": [
    "人工智能基础（拓展）",
    "Python程序设计（拓展）"
   ],
   "jd_basis": "AI应用公司、软件企业与各行业智能化部门大模型应用岗位通用要求"
  },
  {
   "job_id": "ai-label",
   "name": "AI数据标注与治理工程师",
   "direction": "AI人工智能",
   "family": "AI应用类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d10": 0.3,
    "d11": 0.25,
    "d14": 0.25,
    "d5": 0.2
   },
   "core_tags": [
    {
     "tag": "AI训练数据标注与治理",
     "dim": [
      "d11",
      "d10"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "数据集划分与质量评估",
     "dim": [
      "d11",
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "数据清洗与质量校验",
     "dim": [
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "数据安全与脱敏规范",
     "dim": [
      "d13",
      "d10"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "算法效果评估与AB测试",
     "dim": [
      "d11",
      "d10"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.081
    },
    {
     "tag": "机器学习算法基础",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "深度学习框架（PyTorch/TensorFlow）",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "计算机视觉（目标检测/识别）",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "自然语言处理基础",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "大模型API调用与提示词工程",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "模型训练与调优",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.056
    },
    {
     "tag": "模型部署与推理服务（ONNX/TensorRT）",
     "dim": [
      "d11",
      "d8"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.051
    },
    {
     "tag": "边缘计算与端侧AI部署",
     "dim": [
      "d11",
      "d12"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "AI平台运维（GPU资源调度）",
     "dim": [
      "d11",
      "d8"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "数据治理与元数据管理",
     "dim": [
      "d10",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "标准化作业与规范意识",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "数据标注师",
     "HCIA-AI"
    ],
    "after_join": [
     "数据治理相关认证",
     "项目管理培训"
    ]
   },
   "course_map": [
    "人工智能基础（拓展）",
    "数字安防网络项目运维与综合优化"
   ],
   "jd_basis": "AI数据服务商、算法公司数据部门与智能安防企业岗位通用要求"
  },
  {
   "job_id": "ai-platform-ops",
   "name": "AI平台运维工程师",
   "direction": "AI人工智能",
   "family": "AI应用类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d11": 0.3,
    "d8": 0.25,
    "d6": 0.25,
    "d7": 0.2
   },
   "core_tags": [
    {
     "tag": "AI平台运维（GPU资源调度）",
     "dim": [
      "d11",
      "d8"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "模型部署与推理服务（ONNX/TensorRT）",
     "dim": [
      "d11",
      "d8"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "Kubernetes集群运维",
     "dim": [
      "d8"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "监控告警体系（Prometheus/Zabbix）",
     "dim": [
      "d6",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "机器学习算法基础",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "深度学习框架（PyTorch/TensorFlow）",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "计算机视觉（目标检测/识别）",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "自然语言处理基础",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "大模型API调用与提示词工程",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "模型训练与调优",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "边缘计算与端侧AI部署",
     "dim": [
      "d11",
      "d12"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "AI训练数据标注与治理",
     "dim": [
      "d11",
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "数据集划分与质量评估",
     "dim": [
      "d11",
      "d10"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "RAG检索增强应用开发",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "Linux系统管理与调优",
     "dim": [
      "d7"
     ],
     "source": "cert"
    },
    {
     "tag": "运维文档与SOP编制",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-AI",
     "HCIA-Cloud Computing"
    ],
    "after_join": [
     "CKA",
     "HCIP-Cloud Computing"
    ]
   },
   "course_map": [
    "数字安防网络项目运维与综合优化",
    "人工智能基础（拓展）"
   ],
   "jd_basis": "AI厂商、算力中心与大型企业AI平台运维岗位通用要求"
  },
  {
   "job_id": "ai-solution",
   "name": "AI产品解决方案工程师",
   "direction": "AI人工智能",
   "family": "AI应用类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d11": 0.3,
    "d5": 0.3,
    "d14": 0.25,
    "d1": 0.15
   },
   "core_tags": [
    {
     "tag": "AI产品需求分析",
     "dim": [
      "d11",
      "d14"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "智能安防场景AI应用（视频分析）",
     "dim": [
      "d11",
      "d1"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "技术文档与方案输出",
     "dim": [
      "d14",
      "d5"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "AI应用集成与接口开发",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "机器学习算法基础",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "深度学习框架（PyTorch/TensorFlow）",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "计算机视觉（目标检测/识别）",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "自然语言处理基础",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "大模型API调用与提示词工程",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "模型训练与调优",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "模型部署与推理服务（ONNX/TensorRT）",
     "dim": [
      "d11",
      "d8"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.056
    },
    {
     "tag": "边缘计算与端侧AI部署",
     "dim": [
      "d11",
      "d12"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "AI训练数据标注与治理",
     "dim": [
      "d11",
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "数据集划分与质量评估",
     "dim": [
      "d11",
      "d10"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "技术演示与培训能力",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "需求理解与转化能力",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-AI"
    ],
    "after_join": [
     "HCIP-AI",
     "PMP"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "人工智能基础（拓展）"
   ],
   "jd_basis": "AI厂商、智能安防企业方案与售前体系岗位通用要求"
  },
  {
   "job_id": "ai-edge",
   "name": "边缘计算AI工程师",
   "direction": "AI人工智能",
   "family": "AI应用类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d11": 0.3,
    "d1": 0.25,
    "d12": 0.2,
    "d6": 0.25
   },
   "core_tags": [
    {
     "tag": "边缘计算与端侧AI部署",
     "dim": [
      "d11",
      "d12"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "智能安防场景AI应用（视频分析）",
     "dim": [
      "d11",
      "d1"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "物联网终端接入（MQTT/CoAP）",
     "dim": [
      "d12",
      "d1"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "模型部署与推理服务（ONNX/TensorRT）",
     "dim": [
      "d11",
      "d8"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.087
    },
    {
     "tag": "机器学习算法基础",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "深度学习框架（PyTorch/TensorFlow）",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "计算机视觉（目标检测/识别）",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "自然语言处理基础",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "大模型API调用与提示词工程",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "模型训练与调优",
     "dim": [
      "d11"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "AI训练数据标注与治理",
     "dim": [
      "d11",
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "数据集划分与质量评估",
     "dim": [
      "d11",
      "d10"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "AI平台运维（GPU资源调度）",
     "dim": [
      "d11",
      "d8"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "RAG检索增强应用开发",
     "dim": [
      "d11",
      "d9"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "昇腾AI生态与MindSpore",
     "dim": [
      "d11"
     ],
     "source": "cert"
    },
    {
     "tag": "终端功耗与性能优化",
     "dim": [
      "d12",
      "d6"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-AI",
     "HCIA-Datacom"
    ],
    "after_join": [
     "昇腾AI认证",
     "边缘计算厂商认证"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "人工智能基础（拓展）"
   ],
   "jd_basis": "安防厂商、边缘计算企业与物联网集成商岗位通用要求"
  },
  {
   "job_id": "hm-app",
   "name": "鸿蒙应用开发工程师",
   "direction": "鸿蒙与终端",
   "family": "鸿蒙终端类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d12": 0.4,
    "d9": 0.25,
    "d5": 0.2,
    "d6": 0.15
   },
   "core_tags": [
    {
     "tag": "鸿蒙ArkTS应用开发",
     "dim": [
      "d12"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "HarmonyOS应用架构（Stage模型）",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "DevEco Studio工具链使用",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "应用上架与签名发布流程",
     "dim": [
      "d12",
      "d14"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.087
    },
    {
     "tag": "鸿蒙UI组件与布局开发",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "分布式能力与多端协同",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "鸿蒙设备驱动与HDF框架",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "终端应用测试与兼容性验证",
     "dim": [
      "d12",
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "嵌入式C/C++开发基础",
     "dim": [
      "d12",
      "d9"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "物联网终端接入（MQTT/CoAP）",
     "dim": [
      "d12",
      "d1"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "传感器数据采集与处理",
     "dim": [
      "d12",
      "d10"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "固件烧录与OTA升级",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "终端功耗与性能优化",
     "dim": [
      "d12",
      "d6"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "终端安全与隐私合规",
     "dim": [
      "d13",
      "d12"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "产品原型与需求实现",
     "dim": [
      "d12",
      "d5"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-HarmonyOS Application Developer"
    ],
    "after_join": [
     "HCIP-HarmonyOS Application Developer",
     "软考软件设计师"
    ]
   },
   "course_map": [
    "鸿蒙应用开发（拓展）",
    "程序设计基础（拓展）"
   ],
   "jd_basis": "鸿蒙生态企业、应用开发公司与终端厂商岗位通用要求"
  },
  {
   "job_id": "hm-ui",
   "name": "鸿蒙UI开发工程师",
   "direction": "鸿蒙与终端",
   "family": "鸿蒙终端类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d12": 0.4,
    "d5": 0.25,
    "d9": 0.2,
    "d6": 0.15
   },
   "core_tags": [
    {
     "tag": "鸿蒙UI组件与布局开发",
     "dim": [
      "d12"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "鸿蒙ArkTS应用开发",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "DevEco Studio工具链使用",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "产品原型与需求实现",
     "dim": [
      "d12",
      "d5"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "HarmonyOS应用架构（Stage模型）",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "分布式能力与多端协同",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "鸿蒙设备驱动与HDF框架",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "终端应用测试与兼容性验证",
     "dim": [
      "d12",
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "嵌入式C/C++开发基础",
     "dim": [
      "d12",
      "d9"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "物联网终端接入（MQTT/CoAP）",
     "dim": [
      "d12",
      "d1"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "传感器数据采集与处理",
     "dim": [
      "d12",
      "d10"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "固件烧录与OTA升级",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "终端功耗与性能优化",
     "dim": [
      "d12",
      "d6"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "应用上架与签名发布流程",
     "dim": [
      "d12",
      "d14"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "技术演示与培训能力",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-HarmonyOS Application Developer"
    ],
    "after_join": [
     "HCIP-HarmonyOS",
     "UI设计认证"
    ]
   },
   "course_map": [
    "鸿蒙应用开发（拓展）",
    "界面设计与交互（拓展）"
   ],
   "jd_basis": "鸿蒙生态企业、应用开发公司与终端厂商UI开发岗位通用要求"
  },
  {
   "job_id": "hm-dist",
   "name": "分布式多端协同开发工程师",
   "direction": "鸿蒙与终端",
   "family": "鸿蒙终端类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d12": 0.35,
    "d9": 0.3,
    "d5": 0.2,
    "d6": 0.15
   },
   "core_tags": [
    {
     "tag": "分布式能力与多端协同",
     "dim": [
      "d12"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "鸿蒙ArkTS应用开发",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "HarmonyOS应用架构（Stage模型）",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "物联网终端接入（MQTT/CoAP）",
     "dim": [
      "d12",
      "d1"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "鸿蒙UI组件与布局开发",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "鸿蒙设备驱动与HDF框架",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "终端应用测试与兼容性验证",
     "dim": [
      "d12",
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "DevEco Studio工具链使用",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "嵌入式C/C++开发基础",
     "dim": [
      "d12",
      "d9"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "传感器数据采集与处理",
     "dim": [
      "d12",
      "d10"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "固件烧录与OTA升级",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "终端功耗与性能优化",
     "dim": [
      "d12",
      "d6"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "应用上架与签名发布流程",
     "dim": [
      "d12",
      "d14"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.047
    },
    {
     "tag": "终端安全与隐私合规",
     "dim": [
      "d13",
      "d12"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "产品原型与需求实现",
     "dim": [
      "d12",
      "d5"
     ],
     "source": "industry"
    },
    {
     "tag": "新技术验证与选型能力",
     "dim": [
      "d5"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-HarmonyOS Application Developer"
    ],
    "after_join": [
     "HCIP-HarmonyOS",
     "软考软件设计师"
    ]
   },
   "course_map": [
    "鸿蒙应用开发（拓展）",
    "分布式系统基础（拓展）"
   ],
   "jd_basis": "鸿蒙生态企业、终端厂商与创新应用开发团队岗位通用要求"
  },
  {
   "job_id": "hm-driver",
   "name": "鸿蒙设备驱动开发工程师",
   "direction": "鸿蒙与终端",
   "family": "鸿蒙终端类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d12": 0.4,
    "d9": 0.25,
    "d6": 0.2,
    "d1": 0.15
   },
   "core_tags": [
    {
     "tag": "鸿蒙设备驱动与HDF框架",
     "dim": [
      "d12"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "嵌入式C/C++开发基础",
     "dim": [
      "d12",
      "d9"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "传感器数据采集与处理",
     "dim": [
      "d12",
      "d10"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "终端功耗与性能优化",
     "dim": [
      "d12",
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "鸿蒙ArkTS应用开发",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "HarmonyOS应用架构（Stage模型）",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "鸿蒙UI组件与布局开发",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "分布式能力与多端协同",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "终端应用测试与兼容性验证",
     "dim": [
      "d12",
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "DevEco Studio工具链使用",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "物联网终端接入（MQTT/CoAP）",
     "dim": [
      "d12",
      "d1"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "固件烧录与OTA升级",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "应用上架与签名发布流程",
     "dim": [
      "d12",
      "d14"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.047
    },
    {
     "tag": "终端安全与隐私合规",
     "dim": [
      "d13",
      "d12"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    },
    {
     "tag": "客户沟通与服务意识",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "C语言编程基础",
     "HCIA-HarmonyOS"
    ],
    "after_join": [
     "HCIP-HarmonyOS",
     "嵌入式系统开发工程师"
    ]
   },
   "course_map": [
    "嵌入式系统开发（拓展）",
    "数字安防网络需求分析与基础网络搭建"
   ],
   "jd_basis": "终端厂商、安防设备厂商与芯片适配团队驱动开发岗位通用要求"
  },
  {
   "job_id": "hm-test",
   "name": "鸿蒙应用测试工程师",
   "direction": "鸿蒙与终端",
   "family": "鸿蒙终端类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d12": 0.3,
    "d6": 0.3,
    "d9": 0.2,
    "d5": 0.2
   },
   "core_tags": [
    {
     "tag": "终端应用测试与兼容性验证",
     "dim": [
      "d12",
      "d6"
     ],
     "level": "精通",
     "source": "cert",
     "weight": 0.103
    },
    {
     "tag": "DevEco Studio工具链使用",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "鸿蒙ArkTS应用开发",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.092
    },
    {
     "tag": "网络故障定位与恢复",
     "dim": [
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "HarmonyOS应用架构（Stage模型）",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "鸿蒙UI组件与布局开发",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "分布式能力与多端协同",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "鸿蒙设备驱动与HDF框架",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "嵌入式C/C++开发基础",
     "dim": [
      "d12",
      "d9"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.064
    },
    {
     "tag": "物联网终端接入（MQTT/CoAP）",
     "dim": [
      "d12",
      "d1"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.06
    },
    {
     "tag": "传感器数据采集与处理",
     "dim": [
      "d12",
      "d10"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "固件烧录与OTA升级",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "终端功耗与性能优化",
     "dim": [
      "d12",
      "d6"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "应用上架与签名发布流程",
     "dim": [
      "d12",
      "d14"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "Python编程基础",
     "dim": [
      "d9"
     ],
     "source": "industry"
    },
    {
     "tag": "知识沉淀与案例归档",
     "dim": [
      "d14",
      "d6"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-HarmonyOS",
     "软件测试基础"
    ],
    "after_join": [
     "软件测试工程师（软考中级）",
     "ISTQB"
    ]
   },
   "course_map": [
    "软件测试技术（拓展）",
    "鸿蒙应用开发（拓展）"
   ],
   "jd_basis": "终端厂商、应用开发公司与测试服务商岗位通用要求"
  },
  {
   "job_id": "hm-embedded",
   "name": "嵌入式开发工程师",
   "direction": "鸿蒙与终端",
   "family": "鸿蒙终端类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d12": 0.4,
    "d9": 0.25,
    "d6": 0.2,
    "d1": 0.15
   },
   "core_tags": [
    {
     "tag": "嵌入式C/C++开发基础",
     "dim": [
      "d12",
      "d9"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "鸿蒙设备驱动与HDF框架",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.098
    },
    {
     "tag": "传感器数据采集与处理",
     "dim": [
      "d12",
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "终端功耗与性能优化",
     "dim": [
      "d12",
      "d6"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.087
    },
    {
     "tag": "鸿蒙ArkTS应用开发",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "HarmonyOS应用架构（Stage模型）",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "鸿蒙UI组件与布局开发",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "分布式能力与多端协同",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "终端应用测试与兼容性验证",
     "dim": [
      "d12",
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "DevEco Studio工具链使用",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "物联网终端接入（MQTT/CoAP）",
     "dim": [
      "d12",
      "d1"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.056
    },
    {
     "tag": "固件烧录与OTA升级",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "应用上架与签名发布流程",
     "dim": [
      "d12",
      "d14"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.047
    },
    {
     "tag": "终端安全与隐私合规",
     "dim": [
      "d13",
      "d12"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "问题分析与结构化思维",
     "dim": [
      "d5",
      "d6"
     ],
     "source": "industry"
    },
    {
     "tag": "客户沟通与服务意识",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "C语言编程基础",
     "HCIA-HarmonyOS"
    ],
    "after_join": [
     "嵌入式系统开发工程师（软考中级）"
    ]
   },
   "course_map": [
    "嵌入式系统开发（拓展）",
    "数字安防网络需求分析与基础网络搭建"
   ],
   "jd_basis": "安防设备厂商、终端厂商与物联网企业嵌入式开发岗位通用要求"
  },
  {
   "job_id": "hm-iot",
   "name": "物联网终端接入工程师",
   "direction": "鸿蒙与终端",
   "family": "鸿蒙终端类",
   "status": "active",
   "matchable": false,
   "dim_weights": {
    "d1": 0.3,
    "d12": 0.3,
    "d6": 0.2,
    "d5": 0.2
   },
   "core_tags": [
    {
     "tag": "物联网终端接入（MQTT/CoAP）",
     "dim": [
      "d12",
      "d1"
     ],
     "level": "精通",
     "source": "industry",
     "weight": 0.103
    },
    {
     "tag": "传感器数据采集与处理",
     "dim": [
      "d12",
      "d10"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.098
    },
    {
     "tag": "固件烧录与OTA升级",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "industry",
     "weight": 0.092
    },
    {
     "tag": "IP地址与网段规划",
     "dim": [
      "d1"
     ],
     "level": "熟悉",
     "source": "course",
     "weight": 0.087
    },
    {
     "tag": "鸿蒙ArkTS应用开发",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.081
    },
    {
     "tag": "HarmonyOS应用架构（Stage模型）",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.077
    },
    {
     "tag": "鸿蒙UI组件与布局开发",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.073
    },
    {
     "tag": "分布式能力与多端协同",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.068
    },
    {
     "tag": "鸿蒙设备驱动与HDF框架",
     "dim": [
      "d12"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.064
    },
    {
     "tag": "终端应用测试与兼容性验证",
     "dim": [
      "d12",
      "d6"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.06
    },
    {
     "tag": "DevEco Studio工具链使用",
     "dim": [
      "d12"
     ],
     "level": "熟悉",
     "source": "cert",
     "weight": 0.056
    },
    {
     "tag": "嵌入式C/C++开发基础",
     "dim": [
      "d12",
      "d9"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.051
    },
    {
     "tag": "终端功耗与性能优化",
     "dim": [
      "d12",
      "d6"
     ],
     "level": "了解",
     "source": "industry",
     "weight": 0.047
    },
    {
     "tag": "应用上架与签名发布流程",
     "dim": [
      "d12",
      "d14"
     ],
     "level": "了解",
     "source": "cert",
     "weight": 0.043
    }
   ],
   "plus_tags": [
    {
     "tag": "边缘计算与端侧AI部署",
     "dim": [
      "d11",
      "d12"
     ],
     "source": "industry"
    },
    {
     "tag": "设备巡检标准化作业",
     "dim": [
      "d6"
     ],
     "source": "industry"
    },
    {
     "tag": "技术方案文档撰写",
     "dim": [
      "d5",
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "跨部门沟通协作",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "项目进度与质量把控",
     "dim": [
      "d14"
     ],
     "source": "industry"
    },
    {
     "tag": "持续学习与技术跟踪",
     "dim": [
      "d14"
     ],
     "source": "industry"
    }
   ],
   "cert_map": {
    "in_school": [
     "HCIA-Datacom",
     "HCIA-IoT"
    ],
    "after_join": [
     "物联网开发工程师认证",
     "HCIP-Datacom"
    ]
   },
   "course_map": [
    "数字安防网络需求分析与基础网络搭建",
    "数字安防网络隔离与VLAN划分",
    "物联网技术（拓展）"
   ],
   "jd_basis": "物联网企业、安防厂商与智慧园区建设单位终端接入岗位通用要求"
  }
 ],
 "extended_dims_suggestion": [
  {
   "tag": "操作系统与Linux",
   "reason": "云计算、大数据、AI 平台类岗位普遍要求 Linux 系统管理与 Shell 能力，是安防运维向云平台运维延伸的前置技能。 当前图谱中 25 个岗位要求该维度（如网络自动化运维工程师、云平台运维工程师、云平台运维工程师等）。"
  },
  {
   "tag": "云与虚拟化技术",
   "reason": "云平台部署、虚拟化与容器编排是云方向岗位的核心要求，安防视频监控平台云化趋势使其需求上升。 当前图谱中 99 个岗位要求该维度（如安防管理平台运维工程师、视频存储与归档工程师、视频存储与归档工程师等）。"
  },
  {
   "tag": "编程与自动化开发",
   "reason": "网络自动化（Python/NetConf）、大模型应用与实时计算开发均依赖编程能力，是运维与AI岗位的薪资分水岭。 当前图谱中 71 个岗位要求该维度（如智慧安防平台集成工程师、智慧安防平台集成工程师、企业网络架构师等）。"
  },
  {
   "tag": "数据处理与分析",
   "reason": "数据开发、数仓建模与数据分析岗位要求 SQL 与数据处理能力，安防海量视频与告警数据的价值挖掘依赖此维度。 当前图谱中 132 个岗位要求该维度（如视频存储与归档工程师、视频智能分析应用工程师、视频智能分析应用工程师等）。"
  },
  {
   "tag": "AI与智能算法",
   "reason": "智能安防升级带来视频结构化、识别调优、模型部署等岗位，需要AI应用能力（本校学生可从视频分析场景切入）。 当前图谱中 113 个岗位要求该维度（如安防网络集成工程师、视频监控集成调试工程师、技术支持工程师等）。"
  },
  {
   "tag": "终端与嵌入式开发",
   "reason": "安防前端设备（摄像机、门禁控制器）均为嵌入式系统，鸿蒙生态与物联网终端接入岗位要求终端开发能力。 当前图谱中 108 个岗位要求该维度（如AI模型部署工程师、计算机视觉应用工程师、大模型应用开发工程师等）。"
  },
  {
   "tag": "网络安全与合规",
   "reason": "等保合规、数据安全与网络安全策略岗位受政策驱动需求持续增长，安防涉及公共安全数据更需此维度。 当前图谱中 44 个岗位要求该维度（如视频监控集成调试工程师、弱电工程实施工程师、报警与周界防范工程师等）。"
  },
  {
   "tag": "工程管理与职业素养",
   "reason": "项目管理、造价投标与方案售前岗位要求工程管理与职业素养，是技术岗向管理岗晋升的关键能力。 当前图谱中 397 个岗位要求该维度（如安防网络集成工程师、安防网络集成工程师、安防网络集成工程师等）。"
  }
 ],
 "update_mechanism": [
  {
   "type": "周级增量",
   "desc": "每周采集招聘平台新增岗位 JD，抽取新技能标签并做去重归一，增量并入图谱；新标签先入候选池，经复核后正式发布。"
  },
  {
   "type": "月级全量校准",
   "desc": "每月对全部岗位标签做权重校准：统计标签在 JD 中的出现频次与位置（任职要求/岗位职责），调整核心与加分权重，淘汰长期零命中的过期标签。"
  },
  {
   "type": "事件触发刷新",
   "desc": "厂商认证大纲更新（如 HCIA/HCIP 改版）、新职业发布、重大技术迭代（如鸿蒙版本升级）时立即触发对应方向的图谱重构建。"
  },
  {
   "type": "闭环反馈校准",
   "desc": "依据学生实际投递结果、企业录用反馈与顶岗实习评价，反向校验岗位标签与权重的有效性，形成\"采集—匹配—反馈—校准\"的持续优化闭环。"
  }
 ]
};
