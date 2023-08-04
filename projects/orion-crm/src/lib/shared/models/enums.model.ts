export enum EntitiesEnum {
  Wholesaler = 'WHOLESALER',
  BrokerDealer = 'BROKERDEALER',
  Rep = 'REP',
  Advisor = 'ADVISOR',
  Household = 'HOUSEHOLD',
  Portfolio = 'PORTFOLIO',
  Product = 'PRODUCT',
  NewAccount = 'NEW ACCOUNT',
  Account = 'ACCOUNT',
  Model = 'MODEL',
  SubAdvior = 'SUBADVISOR',
  Platform = 'PLATFORM',
  Registration = 'REGISTRATION',
  RegistrationPaperwork = 'REGISTRATION_PAPERWORK',
  Custodian = 'CUSTODIAN',
  RoleManagement = "ROLE_MANAGEMENT"
}

export enum NewAccountStatus {
  New = 0,
  PaperworkInProgress = 1,
  PaperworkNIGO = 2,
  WaitingForFunding = 3,
  AccountBeingTraded = 4,
  Complete = 5,
  eSignInProcess = 6,
  eSignComplete = 7,
  WaitingSignature = 8,
  PendingAccountNumber = 9,
  AccountNumberEstablished = 10,
  ProposalCompleted = 11,
  Cancelled = 12,
  ESignUnsuccessful = 13,
  WaitingForApproval = 14,
  Approved = 15,
  Declined = 16,
  PendingDecision = 17,
  EnvelopeExpired = 19
}

export enum AllyWorkflowStatus {
  Open = 0,
  PackageSent = 1
}

export enum DocuSignGeneratedType {
  Mail = 0,
  InPerson = 1,
}

export enum PaperworkCategoryType {
  NewAccount = 1,
  NewAccountBrokerDealer = 10,
  NewAccountCustodian = 11,
  NewAccountSubAdvisor = 12,
  SystematicPurchase = 2,
  SystematicWithdrawal = 3,
  ACH = 4,
  ACAT = 5,
  ChangeOfAddress = 6,
  ChangeOfEmail = 7,
  RiskBudgetChange = 8,
  StrategyChange = 9
}

export enum PageAlertLevel {
  Primary = "alert-primary",
  Secondary = "alert-secondary",
  Info = "alert-info",
  Success = "alert-success",
  Error = "alert-danger",
  Warning = "alert-warning",
  Light = "alert-light",
  Dark = "alert-dark"
}

export enum ContactPreferenceType {
  Phone = 1,
  Email = 2,
  Text = 3
}

export enum ContactTimeType {
  Morning = 1,
  Afternoon = 2,
  Evening = 3
}

export enum EntityAlertNotificationType {
  CompletedContributions = 1,
  CompletedContributionsDescription = "Completed Contributions",
  CompletedDisbursements = 2,
  CompletedDisbursementsDescription = "Completed Disbursements",
  CompletedTransfers = 3,
  CompletedTransfersDescription = "Completed Transfers",
  FundStatusChanges = 4,
  FundStatusChangesDescription = "FundStatus Changes",
  GoodOrderCommunication = 5,
  GoodOrderCommunicationDescription = "GoodOrder Communication",
  HouseholdChanges = 6,
  HouseholdChangesDescription = "Household Changes",
  InitiatedDisbursements = 7,
  InitiatedDisbursementsDescription = "Initiated Disbursements",
  InitiatedTransfers = 8,
  InitiatedTransfersDescription = "Initiated Transfers",
  NewlyFundedAccounts = 9,
  NewlyFundedAccountsDescription = "Newly Funded Accounts",
  NewlyOpenedAccounts = 10,
  NewlyOpenedAccountsDescription = "Newly Opened Accounts",
}

export enum UserPrivilegesEnum {
  ElementEnabled = 'element',
  AccountsRegistrations = 'elementAccountsRegistrations',
  AccountsProspects = 'elementAccountsProspects',
  AccountsPlanOverview = 'elementAccountsPlanOverview',
  TradingAccountAssignment = 'elementTradingAccountAssignment',
  TradingTradingModelMaintenance = 'elementTradingModelMaintenance',
  TradingTradingModelOverlay = 'elementTradingModelOverlay',
  TradingTradingTradeOrderReview = 'elementTradingTradeOrderReview',
  TradingTradingRebalanceScheduler = 'elementTradingRebalanceScheduler',
  TradingSleeveAssignment = 'elementTradingSleeveAssignment',
  TradingBuySell = 'elementTradingBuySell',
  TradingGlobalTrades = 'elementTradingGlobalTrades',
  ServicingWorkRequests = 'elementServicingWorkRequests',
  ServicingWorkRequestTopicAccountMaintenance = 'elementServicingWorkRequestTopicAccountMaintenance',
  ServicingWorkRequestTopicDataFeed = 'elementServicingWorkRequestTopicDataFeed',
  ServicingWorkRequestTopicLoan = 'elementServicingWorkRequestTopicLoan',
  ServicingWorkRequestTopicNewAccount = 'elementServicingWorkRequestTopicNewAccount',
  ServicingWorkRequestTopicRedemption = 'elementServicingWorkRequestTopicRedemption',
  ServicingWorkRequestTopicInternalTransfer = 'elementServicingWorkRequestTopicInternalTransfer',
  ServicingWorkRequestTopicTransferIn = 'elementServicingWorkRequestTopicTransferIn',
  ServicingWorkRequestTopicGeneralInquiry = 'elementServicingWorkRequestTopicGeneralInquiry',
  ServicingWorkRequestTopicModelChange = 'elementServicingWorkRequestTopicModelChange',
  ServicingWorkRequestTopicRaiseSpendCash = 'elementServicingWorkRequestTopicRaiseSpendCash',
  ServicingWorkRequestTopicTradeRequest = 'elementServicingWorkRequestTopicTradeRequest',
  ServicingFormsLibrary = 'elementServicingFormsLibrary',
  PlanningPlanningByAdvizr = 'elementPlanningPlanningByAdvizr',
  ReportsAccountInformation = 'elementReportsAccountInformation',
  ReportsBanking = 'elementReportsBanking',
  ReportsBeneficiaries = 'elementReportsBeneficiaries',
  ReportsFeeSchedules = 'elementReportsFeeSchedules',
  ReportsLoginInfo = 'elementReportsLoginInfo',
  ReportsRMDs = 'elementReportsRMDs',
  ReportsSystematics = 'elementReportsSystematics',
  ReportsFundAvailability = 'elementReportsFundAvailability',
  ReportsClientReports = 'elementReportsClientReports',
  ResourcesAllModels = 'elementResourcesAllModels',
  ResourcesKnowledgeHub = 'elementResourcesKnowledgeHub',
  ResourcesWhiteLabeledMarketing = 'elementResourcesWhiteLabeledMarketing',
  ResourcesAdvisorDocuments = 'elementResourcesAdvisorDocuments',
  ResourcesStrategists = 'elementResourcesStrategists',
  ResourcesSupport = 'elementResourcesSupport',
  ReportsRecentActivity = 'elementReportsRecentActivity',
  FeeSchedules = 'feeSchedules',
  UserManagement = 'userManagement',
  AdvLynx = 'advisorlynx',
  OrionPlanning = 'advizr',
  Ascent = 'mindflash',
  Insight = 'insightBuilder',
  Trends = 'businessIntelligence',
  Query = 'dataQueries',
  PayoutDashboard = 'payoutDashboard',
  HiddenLevers = 'hiddenLeversApp',
  ClientPortal = 'clientPortal',
  EnableServicingRequest_User = "elementServicingServiceRequests",
  EnableServicingRequest_Internal = "enableServicingRequest",
  AllowBypassMinimumHardstop = "elementBypassHardStopsForAdminAdvisorUser",
  AllowBypassRiskScoreHardStops = "elementBypassHardStopsRTQSettingForAdminUser",
  InternalAdvisors = 'elementInternalAdvisors'
}

export enum ServicingWorkRequestTopics {
  RequestTopicAccountMaintenance = 'Account Maintenance',
  RequestTopicDataFeed = 'Data Feed',
  RequestTopicLoan = 'Loan',
  RequestTopicNewAccount = 'New Account',
  RequestTopicDistribution = 'Distribution',
  RequestTopicInternalTransfer = 'Internal Transfer',
  RequestTopicTransferIn = 'Transfer In',
  RequestTopicGeneralInquiry = 'General Inquiry',
  RequestTopicModelChange = 'Model Change',
  RequestTopicRaiseSpendCash = 'Raise/Spend Cash',
  RequestTopicTradeRequest = 'Trade Request',
}

export enum ToastsAlertLevel {
  Saved,
  Success,
  Danger,
  Warning,
  Info,
  Primary
}

export enum BusyType {
  Next,
  Previous,
  SaveAndReturn
}

export enum AccountTradingPlatform {
  TOM = 0,
  Eclipse = 1
}
export enum NewsFeedType {
  RSS_Feed = 2,
  External_Links = 5,
  Upload_Document = 6
}

export enum AdvisorFeedType {
  Brochures = 4,
  Presentations = 5,
  ProgramInformation = 6,
}

export enum OrionRegistrationTypeCategory {
  Organization = 0,
  Minor = 1,
  Individual = 2,
  Trust = 4,
  MultipleApplicants = 5
}

export enum RiskToleranceGuardrailType {
  None = 0,
  SoftStop = 1,
  HardStop = 2
}

export enum RiskToleranceRequireDocusign {
  No = 0,
  Yes = 1
}

export enum DatabaseOptionsCategory {
  ElementSuperAdmin = 'ElementSuperAdmin'
}

export enum DatabaseOptionsCode {
  RiskTolerance3D = 'RISKTOL3D',
  RiskToleranceSimplified = 'RISKTOLSIMPLIFIED',
  ForceRiskToleranceCode = 'FORCERISKTOL',
  RiskToleranceGuardrailType = 'RISKTOLGUARDTYPE',
  RiskToleranceMessage = 'RISKTOLMESSG',
  AllowClientToRetakeRiskTolQuestionnaire = 'ALLOWRISKRETAKE',
  RequireDocusignSigForRiskTolRetake = 'REQUIREDOCUSIGNRISKRETAKE',
  UseCRMForRTQ = 'USECRMFORRTQ',
  AllowEditRiskRetakeEmail = 'ALLOWEDITRISKRETAKEEMAIL',
  EclipseE = '69ECLIPSEE',
  EclipseFirmId = 'ECLIPSEFIRMID',
  MaxNumberOfSleeves = '69MAXNUMBE',
  AllowSelfDirected = 'ALLWSELFDIRECTED',
  AllowInvestmentObjectives = 'ALLOWINVESTMENTOBJ',
  AllowSleeveStrategyAggs = 'ALLWSLEEVESTRATEGYAGGS',
  AllowOverlayModels = 'ALLWOVERLAYMODELS',
  AllowSpecialInstructions = 'SPECIALINSTRUCTIONS',
  ProposalExperienceType = 'PROPOSALEXPERIENCETYPE',
  AllowAdviceWorks = 'ALLOWADVICEWORKS',
  AllowAllyCustomFirmRequirements = 'ALLOWALLYFIRMREQUIREMENTS',
  AllyDefaultRequiredFields = 'ALLYDEFAULTREQUIREDFIELDS',
  AllowHiddenLeversScenarios = 'ALLOWSCENARIOS',
  AllowEmailQuestionnaire = 'ALLOWEMAILQUESTIONNAIRE',
  SaveProposalToClientDocumentFolder = 'SAVEPROPTOCLTDOCFLDER',
  ModelFilterMinimumInvestmentAmount = 'MODELFILTERATTRMINAMT',
  ModelFilterManagementStyle = 'MODELFILTERMGMTTSTYLE',
  ModelFilterStrategy = 'MODELFILTERSTRATEGY',
  ModelFilterSubAdvisor = 'MODELFILTERSUBADVISOR',
  ModelFilterMandate = 'MODELFILTERMANDATE',
  ModelFilterRiskTolerance = 'MODELFILTERRISKTOLERANCE',
  ModelFilterAllocation = 'MODELFILTERALOC',
  ModelFilterAssetClass = 'MODELFILTERALOCCLASS',
  ModelFilterAssetType = 'MODELFILTERALOCTYPE',
  ModelFilterAttributes = 'MODELFILTERATTRIBUTES',
  HiddenLeversRiskComparison = 'HL_STRESSTEST',
  CanImpostRisk = 'CANIMPOSERISK',
  OrionPlanningGoalPlans = 'ADVIZR_GOAL_PLANS',
  AdvisoryFees = 'ADVISORYFEES',
  EnableSendData = 'ENABLESENDDATA',
  EmailNotification = 'ENOTIFELEM',
  AllowCustomEmailText = 'ALLOWCUSTOMEMAILTEXT',
  DefaultEmailSubject = 'DEFAULTEMAILSUBJECT',
  DefaultEmailBody = 'DEFAULTEMAILBODY',
  AllowEmailClient = 'ALLOWEMAILCLIENT',
  CustodialInbox = 'CUSTODIALINBOX',
  SearchOrionPlanning = 'ADVIZR_ENABLE_SEARCH',
  OrionPlanningOrionExpOpt = 'ADVIZR_OREXP_OPT',
  OrionPlanningRiskTolerance = 'ADVIZR_RISK_TOL',
  OrionPlanningPlaidAccount = 'ADVIZR_PLAID_ACCOUNTS',
  OrionPlanningClientCall = 'ENABLE_CLIENT_CALL',
  SalesforceOpportunity = 'SALESFORCE_OPPORTUNITY',
  RequireAccountSetup = 'ELEMENTREQACCTNUM',
  CrmRefreshType = 'CRMREFRESHTYPE',
  ElementIntegrationEndpoint = 'ELEMENTINTEP',
  DefaultProposalTemplateId = 'DEFAULT_PROPTEMPLATE_GUID',
  ElementIntegrationBaseUrlForAccountNumbers = 'ELEMENTINTBURL',
  NetOfFees = 'NETOFFEES',
  MaxSelfDirectedTickers = 'MAXSELFDIRECTEDTICKERS',
  AllowCreateHousehold = 'ALLOWCREATEHOUSEHOLD',
  AllowManualProposalCompletion = 'ALLOWMANUALPROPCOMPLETION',
  ReviewFormsExperience = 'REVIEWFORMSEXPERIENCE',
  RestrictRtqEdit = 'RESTRICTRTQEDIT',
  EnableApprovalProcess = 'ENABLEAPPROVALPROCESS',
  EnableDocuSignFormsLibrary = 'ENABLEDOCUSIGNFL',
  ShowBillingTile = 'SHOWBILLIGTILE',
  ShowGetTheLatestTile = 'SHOWGETTHELATESTTILE',
  RepAum = 'DSPMODELSORSTRATEGIES',
  hasCountriesInState = 'HASCOUNTRIESINSTATE',
  UsePortfolioViewDashboard = 'USEPVDASHBOARD',
  AdditionalSourcesElement = 'ADDITIONALSOURCESELEMENT',
  AllowCompareAccounts = 'ALLOWCOMPAREACCOUNTS',
  FeatureFlagPreGenData = 'FEATUREFLAGPREGENDATA',
  EnableRedtailSearch = 'ENABLEREDTAILSEARCH',
  EnableBrinkerCapitalIframeWorkRequest = 'ENABLE_BC_IFRAME_WR',
  EnableBrinkerCapitalIframeFormsLibrary = 'ENABLE_BC_IFRAME_FL',
  ElementExperience = 'ELEMENTEXPERIENCE',
  AllowAdditionalBeneficiaryFields = 'ALLOWADDBENEFIELDS',
  RequireProposalWorkflow = 'REQUIREPROPOSALWORKFLOW',
  EnableDownloadDataPackage = 'ENABLEDOWNLOADDATAPACKAGE',
  HidePrintDocuSign = 'HIDE_PRINT_DS',
  HideDownloadExport = 'HIDE_DOWNLOADE_DS',
  AllowRebalanceFrequency = 'ALLOWREBALFREQ',
  AllowRebalanceAccountAutomatically = 'ALLOWREBALACCTAUTO',
  DisplayGenericAllyDataPackageErrorMessage = 'DSPGENERICALLYDTPKGERRMSG',
  SelectSourcesToOpenAccounts = 'SLCSRCOPENACCOUNTS',
  RestrictToSingleEnvelopeCreationForDocuSign = 'RESTR_SINGLE_ENVELOPE_DS',
  AllowWorkRequestAttachmentVisibility = 'ALLOW_WR_ATTACHMENT_VIS',
  AllowWorkRequestMultipleFiles = 'ALLOW_WR_ATTACHMENT_MUL',
  RequireBeneficiaryInformation = "REQ_BENE_INFO",
  DocuSignEnableDayCachingForTemplateFields = "DS_DAY_CACHE_FIELDS",
  EnablePaperWorkAssignmentCaching = "PAYPERWORK_ASSG_CACHE",
  EnableOrionConnectImport = "ENABLE_OC_IMPORT",
  EnableProposalCreation = 'ENABLEPROPOSALCREATION',
  EnableNewAccountCreation = 'ENABLENEWACCOUNTCREATION',
  EnableWorkRequestCreation = 'ENABLEWORKREQUESTCREATION',
  HideAcatOtherOption = "HIDE_ACAT_OTHER",
  InternalReviewFormFieldCanRemove = 'MANAGE_RFF_INT_CAN_REMOVE',
  InternalReviewFormFieldAlwaysRefresh = 'MANAGE_RFF_INT_REFR_ALWS',
  AllowEclipseTradingPreferences = 'ALLOW_ECLIPSE_PREF',
  AllowMultiFundingInstanceInWorkFlow = 'ALLOW_MULTI_FUNDING',
  FeatureFlagProposalCloud = 'FEATUREFLAG_EPC',
  ShowRiskStats = "SHOWRISKSTATS",
  DisplayTemplateIdOnEnvelope = 'DISPLAY_PAPERWORK_ENVEL',
  EnableDownloadBDUnsignedBundle = 'ENBL_DWNLD_BD_USGND_BNDL',
  AllowEsignForAllCustodians = 'ALLOW_ESIGN_CUSTODIANS',
  EnableCountryOnOwnerSetup = 'ENBL_COUNTR_OWNER_SETUP',
  RepFeeSplit = "REPFEESPLIT",
  CountryOnOwnerSetupList = "COUNTR_OWNER_SETUP_LIST",
  EnableDocuSignServicingRequest = 'ENABLEDOCUSIGNWRKREQ',
  EnableCommentsServicingRequest = 'ENABLECOMMENTSWRKREQ',
  EnableAdvisorNotifications = 'ENABLEADVNOTIFICATIONS',
  EnableEncryptedFilesServicingRequest = 'ENABLECRYPTFILESSVCREQ',
  EnableAdditionalAttachmentsServicingRequest = 'ENABLEADDTATTSWRKREQ',
  EnableServicingRequest = 'ENABLESERVICINGREQUEST',
  UseOCForAcctInfo = "USEOCFORACCTINFO",
  ModelMinimumValidation = "69MODELMINIMUM",
  ModelPerformanceType = 'MODEL_PERF_TYPE',
  SimulateEnterpriseCallback = 'SIM_ENTERP_CALLBACK',
  EnableCustomIndexing = 'ENABLECUSTOMINDEXING',
  ProposalTheme = 'PROPOSAL_THEME',
  StrategistIds = 'STRATEGISTIDS',
  EnableDocuSignVisibility = 'ENABLEDOCUSIGVIS',
  EnableNewAccountWorkFlowDownloadAll = 'ENABLE_NA_WF_DWNL_ALL',
  HideBlankExportValues = 'HIDEBLANKEXPORTVALUES',
  AllowInvestementSecuritiesLimit = 'ENBL_INV_SECURITIES_LIMIT',
  AllowRepToRemoveProspects = 'ALL_REP_PROSP_REMOVAL',
  allowWealthAdvisoryWorkflow = "ALL_WEALTH_ADVISORY_WF",
  EnableSalesforceOption = "ENBL_SF_OPTION",
  EnableBrinkerClientProfile = "ENABLEBRINKERCLPROF",
  EnableBrinkerAccountSnapshot = "ENABLEACCTSNAPSHOT",
  EnableRepFragmentFiltering = 'REP_FRAG_FILTER',
  ModifySleeveStrategyAggregates = "MODIFY_SLV_STRAT_AGGS",
  DisplayProposalId = "DISPLAY_PROPOSAL_ID",
  ModelNumberSpeficiedInField = "MODEL_NUMBER_AGGR_DISPLAY",
  SleeveStrategyAggLabel = "SSA_LABEL",
  OverlayModelLabel = "OVERLAY_MODEL_LABEL"
}

export enum RepOptionsCode {
  OutSourcedTradingService = 'REPELEMENTSERVICE',
  OutSourcedTrading = 'REPELEMENTTRADING'
}

export enum CitizenshipType {
  UsCitizen = 'UsCitizen',
  PermanentResident = 'PermanentResident',
  NotUsCitizen = 'NotUsCitizen'
}

export enum AccountAllocationType {
  Category,
  Class,
  Mandate
}

export enum PageViewAction {
  Add = 0,
  Get = 1,
  Update = 2,
  Delete = 3,
  SetDefault = 4
}

export enum ApprovalStatus {
  Approved = 0,
  PendingApproval = 1,
  NotApproved = 2
}

export enum SecuritiesSearchSource {
  eclipse = 'eclipseProducts',
  communities = 'communitiesProducts',
  trading = 'tradingProducts',
  exclusions = 'productExclusions'
}

export enum tenantType {
  Other = 0,
  OAT = 1
}

export enum ElementEntityEnum {
  NewHousehold = 1,
  NewAccount = 2
}

export enum EntityEnum {
  BrokerDealer = 2,
  Wholesaler = 3,
  Rep = 4,
  Household = 5,
  Registration = 6,
  Account = 7,
  Product = 9,
  TenantAdministrator = 17,
  Admin = 50,
  SubAdvisor = 52,
  AssetClass = 81,
  AssetCategory = 90,
  RiskCategory = 91,
  CtcUser = 99,
  ServicingWorkRequest = 696,
  DefaultPayoutRate = 697,
  ProposalUsesSelfDirected = 698,
  Prospect = 888,
  User = 777,
  Unknown = 999,
}

export enum LoginEntityEnum {
  BrokerDealer = 1,
  Wholesaler = 2,
  Representative = 3,
  Client = 4,
  RIA = 5,
  Administrator = 6,
  SubAdvisor = 7,
  ThirdPartyAdministrator = 13,
  Custodian = 14,
  PlanSponsor = 16,
  ThirdParty = 17,
  Admin = 50,
  ServiceAccount = 18,
  Participant = 19,
  RepAccountManager = 20,
  Payee = 23
}

export enum ProcessingStatus {
  New = 0,
  Processing,
  Failed,
  PartiallyComplete,
  Complete,
  Canceled
}
export enum EntityValueType {
  Aum = 1,
  YtdSales = 2,
  YtdRedemptions = 3,
  PriorDayContributions = 4,
  PriorDayDistributions = 5,
  MtdContributions = 6,
  MtdDistributions = 7,
  QtdContributions = 8,
  QtdDistributions = 9,
  YtdContributions = 10,
  YtdDistributions = 11,
  AccountCount = 12,
  Aum1YrAgo = 13
}

export const NEW_ACCOUNT_DESCRIPTION_STATUS = {
  PROPOSAL_COMPLETE: "Proposal Completed",
  COMPLETE: 'Complete',
  COMPLETED: 'Completed',
  ESIGN_COMPLETE: 'eSign Complete',
  WAITING_FOR_SIGNATURE: 'Waiting for Signature',
  DOCUMENT_DOWNLOADED: 'Document Downloaded'
}

export enum MessagesEnum {
  AdvisorRequired = 'Advisor Required'
}

export enum TradingPlatform {
  TOM = 0,
  Eclipse = 1
}

export enum Severity {
  Error = 0,
  Warning,
  Information
}

export enum ActionType {
  Approve = 0,
  Cancel = 1
}

export enum HouseholdIntegrationType {
  Redtail = 'Redtail',
  OrionPlanning = 'OrionPlanning',
  OrionConnect = 'oc',
  AdviceWorks = 'AdviceWorks',
  Manual = 'manual'
}

export enum ServicingQuestionType {
  TextArea = 1,
  TextBox = 2,
  Checkbox = 3,
  Select = 4,
  Email = 5,
  Date = 6,
  Phone = 7,
  DateTime = 8,
  MultiSelect = 9,
  Url = 10,
  Currency = 11,
  Double = 12,
  Reference = 14,
  AccountNumber = 15,
  DocuSign = 16,
  BankAccountNumber = 17,
  EmptySpace = 18,
  DocumentSubmission = 19,
  DollarPercentAmount = 20,
  ReceivingAccountNumber = 21,
  Unknown = 999
}

export enum FooterState {
  Open = 'open',
  Closed = 'closed'
}
export enum ReportType {
  FactSheet = 1,
  HiddenLevers = 2,
  OrionPlanning = 3,
  NewHouseholdChartData = 4,
  Communities = 5,
  NewAccountChartData = 6,
  Unknown = 99
}

export enum NewHouseholdOwnerAddressType {
  HomeAddress = 0,
  MailingAddress = 1,
}

export enum AccessType {
  None = 0,
  Read = 2,
  Edit = 4,
  Delete = 8
}

export enum ManualAccountSourceType {
  Element = 0,
  OrionCustomIndexing = 1
}

export enum GenerationType {
  Unknown = 0,
  Automatic = 1,
  Download = 2,
  Email = 3
}

export enum ProposalTypeEnum {
  Unknown = 0,
  StandardProposal = 1,
  BlendedFactSheet = 2,
  FactSheet = 3,
  CustomIndexing_OneYearTransition = 4,
  CustomIndexing_MultiYearTransition = 5,
  CustomIndexing_DepositCashIntoPortfolio = 6,
  CustomIndexing_WithdrawCashFromPortfolio = 7,
  CustomIndexing_NewPortfolioFromCash = 8
}
