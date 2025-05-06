type TranslationKey = string;

const translations: Record<string, Record<TranslationKey, string>> = {
  en: {
    // 通用导航
    'common.home': 'Home',
    'common.airdrop': 'Airdrop',
    
    // Banner文字
    'welcome_to_tutu': 'Welcome to Tutu World!',
    'tutu_description': 'A community-powered, super cute token project has officially landed on Linea Network!',
    'get_airdrop': 'Claim Airdrop',
    
    // 钱包相关
    'wallet.connect': 'Connect Wallet',
    'wallet.connecting': 'Connecting...',
    'wallet.disconnect': 'Disconnect',
    'wallet.connected': 'Connected',
    'wallet.balance': 'Balance',
    'wallet.copy': 'Copy Address',
    'wallet.explorer': 'View in Explorer',
    'wallet.profile': 'My Profile',
    'wallet.modal.title': 'Connect Wallet',
    'wallet.modal.account': 'Account Details',
    
    // 空投相关
    'claim.action': 'Claim',
    'claim.complete': 'Claimed',
    'claim.loading': 'Loading...',
    'airdrop.title': 'Tutu Token Airdrop Rules',
    'airdrop.requirements': 'Eligibility Requirements:',
    'airdrop.requirement1': 'All addresses holding LXP on the Linea blockchain before November 20, 2024, 15:11 (UTC)',
    'airdrop.requirement2': 'Based on the amount of LXP in your wallet at that time',
    'airdrop.requirement3': 'For every 1 LXP you hold, you can claim 1 Tutu',
    'airdrop.requirement4': 'No limit to the amount you can mint based on your LXP balance',
    'airdrop.requirement5': 'Tutu tokens can be claimed on Linea chain.',
    'airdrop.connect_wallet_check': 'Please connect your wallet to check airdrop eligibility',
    'airdrop.not_eligible': 'Sorry, you are not eligible for the airdrop',
    'airdrop.already_claimed': 'You have successfully claimed your Tutu tokens',
    'airdrop.can_claim': 'Congratulations! You can claim Tutu tokens',
    'airdrop.view_transaction': 'View Transaction',
    
    // TokenIntro相关
    'token.intro.title': 'About Tutu Token',
    
    // Tokenomics相关
    'tokenomics.title': 'Tokenomics',
    'tokenomics.total_supply': 'Total Supply',
    'tokenomics.team': 'Team',
    'tokenomics.airdrop': 'Airdrop',
    'tokenomics.description.title': 'Token Distribution',
    'tokenomics.description.content': 'Tutu does not seek funding, nor does it represent any financial interests. It is a Meme cultural experiment with no fundraising activities and no development team holding shares.',
    'tokenomics.zero_presale': 'ZERO presale, ZERO fundraising, ZERO team dividends',
    'tokenomics.no_presale': 'No presale, IDO or Launchpad',
    'tokenomics.no_vc': 'No VC, angel or private round participation',
    'tokenomics.no_founders': 'No allocation reserved for founders or operators',
    'tokenomics.no_inflation': 'No inflation or additional issuance mechanism',
    'tokenomics.basic_info': 'Token Basic Information',
    'tokenomics.token_name': 'Token Name',
    'tokenomics.chain': 'Chain',
    'tokenomics.minting_condition': 'Minting Condition',
    'tokenomics.contract_address': 'Contract Address',
    'tokenomics.snapshot_time': 'Snapshot Time',
    'tokenomics.eligible_addresses': 'Eligible Addresses',
    'tokenomics.distribution_mechanism': 'Distribution Mechanism',
    'tokenomics.distribution_target': 'Distribution Target',
    'tokenomics.distribution_method': 'Distribution Method',
    'tokenomics.minting_period': 'Minting Period',
    'tokenomics.no_time_limit': 'No time limit, can mint anytime',
    'tokenomics.fair_minting': 'Fair Minting',
    'tokenomics.lxp_holders': 'LXP holders',
    'tokenomics.fair_mint': '100% Fair Minting',
    'tokenomics.no_presale_desc': 'To ensure absolute fairness, Tutu did not conduct any form of presale activities',
    'tokenomics.no_vc_desc': 'No VCs or investment institutions were introduced to ensure the project is fully controlled by community members',
    'tokenomics.no_founders_desc': 'The founding team and operations team are not allocated shares from the fund pool, ensuring fairness',
    'tokenomics.no_inflation_desc': 'The total supply is permanently fixed at 2,621,511,258 tokens, and there will never be any form of additional issuance',
    'token.intro.item1.title': 'Tutu Origin',
    'token.intro.item1.subtitle': 'A cute community-driven response',
    'token.intro.item1.content': 'Only LXP holders are eligible to mint Tutu proportionally.\n\nDue to repeatedly delayed official TGE (Token Generation Event), the community decided to take the initiative and respond with Tutu to the long-awaited enthusiasm.\n\nTutu is a reward for active participants and a tribute to the Web3 spirit.\n\nMinting rule: 1 LXP = 1 Tutu',
    
    'token.intro.item2.title': 'Tutu Value',
    'token.intro.item2.subtitle': 'Badge of honor, cannot be replicated',
    'token.intro.item2.content': 'Tutu is a pure Meme token.\n\nIt does not promise returns or come with airdrop schemes, its existence is a "symbol of honor".\n\n🏆 Holding is an honor: representing you as a true early supporter on Linea chain.\n\n💯 Fair distribution: no reserves, no presale, no team allocation.\n\n🔒 Capped supply: 2,621,511,258 tokens, never to be increased.',
    
    'token.intro.item3.title': 'Community-Driven',
    'token.intro.item3.subtitle': 'A DAO experiment for every rabbit',
    'token.intro.item3.content': 'Tutu has no boss, only rabbit friends.\n\nThe project has no foundation or core team; every Tutu holder is the project owner.\n\n📢 All proposals and upgrades will be decided through community voting.\n\n🧠 The community can propose development plans, cooperation suggestions, and ecosystem expansion directions.\n\n🧩 Tutu future is determined by everyone together, not by a few.'
  },
  'zh-CN': {
    // 通用导航
    'common.home': '首页',
    'common.airdrop': '空投',
    
    // Banner文字
    'welcome_to_tutu': '欢迎来到 Tutu 的世界！',
    'tutu_description': '一个由 社区赋能、可爱爆棚 的代币项目正式登陆 Linea 网络！',
    'get_airdrop': '领取空投',
    
    // 钱包相关
    'wallet.connect': '连接钱包',
    'wallet.connecting': '连接中...',
    'wallet.disconnect': '断开连接',
    'wallet.connected': '已连接',
    'wallet.balance': '余额',
    'wallet.copy': '复制地址',
    'wallet.explorer': '在浏览器中查看',
    'wallet.profile': '我的资料',
    'wallet.modal.title': '连接钱包',
    'wallet.modal.account': '账户详情',
    
    // 空投相关
    'claim.action': '领取',
    'claim.complete': '已领取',
    'claim.loading': '加载中...',
    'airdrop.title': 'Tutu 代币空投规则',
    'airdrop.requirements': '领取资格要求：',
    'airdrop.requirement1': '所有在 2024年11月20日 15:11 (UTC) 前，在 Linea 区块链上持有 LXP 的地址。',
    'airdrop.requirement2': '可领取Tutu的数量基于快照时钱包中所持有的 LXP 数量。',
    'airdrop.requirement3': '每持有 1 LXP，可领取 1 Tutu。',
    'airdrop.requirement4': '铸造上限为快照时您的 LXP 余额。',
    'airdrop.requirement5': 'Tutu代币于Linea链上领取。',
    'airdrop.connect_wallet_check': '请连接您的钱包查询空投资格',
    'airdrop.not_eligible': '很遗憾，您不符合空投资格',
    'airdrop.already_claimed': '您已成功领取空投代币',
    'airdrop.can_claim': '恭喜您，您可以领取Tutu代币',
    'airdrop.view_transaction': '查看交易详情',
    
    // TokenIntro相关
    'token.intro.title': 'Tutu 代币介绍',
    
    // Tokenomics相关
    'tokenomics.title': '代币经济学',
    'tokenomics.total_supply': '代币总量',
    'tokenomics.team': '团队持有',
    'tokenomics.airdrop': '空投',
    'tokenomics.description.title': '代币分配',
    'tokenomics.description.content': 'Tutu 并不寻求融资，也不代表任何金融权益。它是一个 Meme 文化实验，没有募资行为，也没有开发团队持有份额。',
    'tokenomics.zero_presale': '零预售，零募资，零团队分红',
    'tokenomics.no_presale': '没有预售、IDO 或 Launchpad',
    'tokenomics.no_vc': '没有VC、天使轮或私募轮参与',
    'tokenomics.no_founders': '没有预留给创始人或运营者的份额',
    'tokenomics.no_inflation': '没有通胀、增发机制',
    'tokenomics.basic_info': '代币基本信息',
    'tokenomics.token_name': '代币名称',
    'tokenomics.chain': '发行链',
    'tokenomics.minting_condition': '铸造条件',
    'tokenomics.snapshot_time': '快照时间',
    'tokenomics.eligible_addresses': '有资格领取的地址数',
    'tokenomics.distribution_mechanism': '分发机制',
    'tokenomics.distribution_target': '分发对象',
    'tokenomics.distribution_method': '分发方式',
    'tokenomics.minting_period': '铸造期限',
    'tokenomics.no_time_limit': '无限制，随时可以铸造',
    'tokenomics.lxp_holders': 'LXP持有者',
    'tokenomics.fair_minting': '公平铸造',
    'tokenomics.fair_mint': '100% 公平铸造',
    'tokenomics.no_presale_desc': '为保证绝对公平，Tutu没有进行任何形式的预售活动',
    'tokenomics.no_vc_desc': '没有引入任何VC或投资机构，确保项目完全由社区成员控制',
    'tokenomics.no_founders_desc': '创始团队和运营团队不予资金池预留份额，保障公平性',
    'tokenomics.no_inflation_desc': '总量永远固定为2,621,511,258枚，绝不会有任何形式的增发',
    'token.intro.item1.title': 'Tutu 的来历',
    'token.intro.item1.subtitle': '一个源自社区的可爱反击',
    'token.intro.item1.content': '只有LXP持有者，才有资格按比例铸造 Tutu。\n\nLinea 官方原计划的 TGE（代币生成事件）一再跳票，为此，社区决定先动起来，用 Tutu 回应等待已久的热情。\n\nTutu 是对活跃者的奖励，也是对 Web3 精神的致敬。\n\n铸造规则：1 LXP = 1 Tutu',
    
    'token.intro.item2.title': 'Tutu 的价值',
    'token.intro.item2.subtitle': '荣誉勋章，不可复制',
    'token.intro.item2.content': 'Tutu 是一个纯粹的 Meme 代币。\n\n不承诺收益，也不附带空投套路，Tutu的存在就是 「荣誉的象征」。\n\n🏆 持有即荣誉：代表你是 Linea 链上真正的早期支持者.\n\n💯 公平分发：无预留、无预售、无团队分配.\n\n🔒 总量封顶：2,621,511,258 枚，绝不增发.',
    
    'token.intro.item3.title': 'Tutu 由社区驱动',
    'token.intro.item3.subtitle': '属于每一只兔兔的 DAO 实验',
    'token.intro.item3.content': 'Tutu 没有老板，只有兔友。\n\n项目没有基金会或核心团队，每一个 Tutu 持有者，都是项目的主人。\n\n📢 所有提案与升级，都将通过社区投票决策。\n\n🧠 社区可提出开发计划、合作建议与生态拓展方向。\n\n🧩 Tutu 的未来，不由少数人决定，而由所有人共同塑造。'
  },
  ko: {
    // 通用导航
    'common.home': '홈',
    'common.airdrop': '에어드롭',
    
    // Banner文字
    'welcome_to_tutu': 'Tutu 세계에 오신 것을 환영합니다!',
    'tutu_description': '커뮤니티 기반의 아주 귀여운 토큰 프로젝트가 Linea 네트워크에 공식 출시되었습니다!',
    'get_airdrop': '에어드롭 받기',
    
    // 钱包相关
    'wallet.connect': '지갑 연결',
    'wallet.connecting': '연결 중...',
    'wallet.disconnect': '연결 해제',
    'wallet.connected': '연결됨',
    'wallet.balance': '잔액',
    'wallet.copy': '주소 복사',
    'wallet.explorer': '익스플로러에서 보기',
    'wallet.profile': '내 프로필',
    'wallet.modal.title': '지갑 연결',
    'wallet.modal.account': '계정 정보',
    
    // 空投相关
    'claim.action': '수령',
    'claim.complete': '수령됨',
    'claim.loading': '로딩 중...',
    'airdrop.title': 'Tutu 토큰 에어드롭 규칙',
    'airdrop.requirements': '자격 요구 사항:',
    'airdrop.requirement1': '2024년 11월 20일 15:11 (UTC) 이전에 Linea 블록체인에서 LXP 를 보유한 모든 주소',
    'airdrop.requirement2': '해당 시점에 지갑에 있는 LXP 수량을 기준으로 함',
    'airdrop.requirement3': '보유한 LXP 1개당 1개의 Tutu를 수령할 수 있음',
    'airdrop.requirement4': '발행 한도는 스냅샷 시점의 LXP 잔액입니다.',
    'airdrop.requirement5': 'Tutu 토큰은 Linea 체인에서 수령할 수 있습니다.',
    'airdrop.connect_wallet_check': '에어드롭 자격을 확인하려면 지갑을 연결하세요',
    'airdrop.not_eligible': '죄송합니다. 에어드롭 자격이 없습니다',
    'airdrop.already_claimed': 'Tutu 토큰을 성공적으로 수령했습니다',
    'airdrop.can_claim': '축하합니다! Tutu 토큰을 수령할 수 있습니다',
    'airdrop.view_transaction': '거래 보기',
    
    // TokenIntro相关
    'token.intro.title': 'Tutu 토큰 소개',
    
    // Tokenomics相关
    'tokenomics.title': '토큰노믹스',
    'tokenomics.total_supply': '총 공급량',
    'tokenomics.team': '팀 보유',
    'tokenomics.airdrop': '에어드롭',
    'tokenomics.description.title': '토큰 배분',
    'tokenomics.description.content': 'Tutu는 투자를 구하지 않으며, 금융적 이익을 나타내지도 않습니다. 이는 투자 활동이 없고 개발 팀이 주식을 보유하지 않는 Meme 문화 실험입니다.',
    'tokenomics.zero_presale': '프리세일 없음, 투자 없음, 팀 배당 없음',
    'tokenomics.no_presale': '프리세일, IDO 또는 Launchpad 없음',
    'tokenomics.no_vc': 'VC, 엔제 라운드 또는 프라이빗 라운드 참여 없음',
    'tokenomics.no_founders': '창설자 또는 운영자를 위한 할당 없음',
    'tokenomics.no_inflation': '인플레이션 또는 추가 발행 메커니즘 없음',
    'tokenomics.basic_info': '토큰 기본 정보',
    'tokenomics.token_name': '토큰 이름',
    'tokenomics.chain': '체인',
    'tokenomics.minting_condition': '미팅 조건',
    'tokenomics.snapshot_time': '스냅샷 시간',
    'tokenomics.eligible_addresses': '자격 있는 주소 수',
    'tokenomics.distribution_mechanism': '배포 메커니즘',
    'tokenomics.distribution_target': '배포 대상',
    'tokenomics.distribution_method': '배포 방법',
    'tokenomics.minting_period': '미팅 기간',
    'tokenomics.no_time_limit': '시간 제한 없음, 언제든지 미팅 가능',
    'tokenomics.fair_minting': '공정한 미팅',
    'tokenomics.no_presale_desc': '절대적인 공정성을 보장하기 위해 Tutu는 어떤 형태의 프리세일도 진행하지 않았습니다',
    'tokenomics.no_vc_desc': '프로젝트가 커뮤니티 구성원에 의해 완전히 제어되도록 VC 또는 투자 기관이 도입되지 않았습니다',
    'tokenomics.no_founders_desc': '공정성을 보장하기 위해 창업팀과 운영팀은 자금풀에서 주식을 따로 받지 않습니다',
    'tokenomics.no_inflation_desc': '총 공급량은 2,621,511,258개로 영구적으로 고정되어 있으며, 어떤 형태의 추가 발행도 절대 없을 것입니다',
    'token.intro.item1.title': 'Tutu의 기원',
    'token.intro.item1.subtitle': '커뮤니티에서 탐생한 귀여운 반응',
    'token.intro.item1.content': 'LXP 보유자만이 Tutu를 비례적으로 채굴할 자격이 있습니다.\n\nLinea 공식 TGE(토큰 생성 이벤트)가 계속 연기되어, 커뮤니티는 이니셔티브를 취하고 Tutu로 응답하기로 결정했습니다.\n\nTutu는 활발한 참여자에 대한 보상이자 Web3 정신에 대한 경의입니다.\n\n채굴 규칙: 1 LXP = 1 Tutu',
    
    'token.intro.item2.title': 'Tutu의 가치',
    'token.intro.item2.subtitle': '복제할 수 없는 명예의 상징',
    'token.intro.item2.content': 'Tutu는 순수한 Meme 토큰입니다.\n\n수익을 약속하지 않고 에어드롭 구조가 없으며, 그 존재자체가 "명예의 상징"입니다.\n\n🏆 보유는 영광: Linea 체인의 진정한 초기 지지자임을 나타냅니다.\n\n💯 공정한 배분: 예약 없음, 프리세일 없음, 팀 할당 없음.\n\n🔒 공급량 제한: 2,621,511,258 토큰, 절대 추가 발행 없음.',
    
    'token.intro.item3.title': '커뮤니티 주도적',
    'token.intro.item3.subtitle': '모든 토끼를 위한 DAO 실험',
    'token.intro.item3.content': 'Tutu는 사장이 없고, 토끼 친구들만 있습니다.\n\n프로젝트에는 재단이나 핵심 팀이 없으며, 모든 Tutu 소유자가 프로젝트의 주인입니다.\n\n📢 모든 제안과 업그레이드는 커뮤니티 투표를 통해 결정됩니다.\n\n🧠 커뮤니티는 개발 계획, 협력 제안, 생태계 확장 방향을 제안할 수 있습니다.\n\n🧩 Tutu의 미래는 소수가 아닌 모든 사람이 함께 결정합니다.'
  }
};

export const getTranslation = (locale: string, key: TranslationKey): string => {
  const localeTranslations = translations[locale] || translations.en;
  return localeTranslations[key] || key;
}; 