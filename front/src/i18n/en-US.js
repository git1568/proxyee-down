export default {
  nav: {
    tasks: 'Task Manager',
    extension: 'Extension Manager',
    setting: 'Software Setting',
    about: 'About Project',
    support: 'Support Us'
  },
  tip: {
    tip: 'Tip',
    ok: 'OK',
    cancel: 'Cancel',
    notNull: 'Can not be empty',
    fmtErr: 'Incorrect format',
    choose: 'Choose',
    save: 'Save',
    copySucc: 'Copy success',
    copyFail: 'Copy fail'
  },
  tasks: {
    createTask: 'Create Task',
    continueDownloading: 'Continue Downloading',
    pauseDownloads: 'Pause Downloads',
    deleteTask: 'Delete Task',
    deleteTaskTip: 'Do you want to delete task and file?',
    method: 'Method',
    url: 'URL',
    fileName: 'Name',
    fileSize: 'Size',
    connections: 'Connections',
    filePath: 'Path',
    status: 'Status',
    operate: 'Operate',
    downloadAddress: 'Address',
    wait: 'Wait',
    unknowLeft: 'Unknow',
    downloadSpeed: 'Speed',
    createTime: 'Create Time',
    taskProgress: 'Schedule',
    statusPause: 'Pause',
    statusFail: 'Fail',
    statusDone: 'Done',
    option: 'Option',
    head: 'Head',
    body: 'Body',
    detail: 'Detail',
    checkSameTask: 'Detected the same download task, did you choose to refresh the task?',
    sameTaskList: 'Task List',
    sameTaskPlaceholder: 'Please select the task to refresh'
  },
  extension: {
    conditions: 'Terms and Conditions',
    conditionsContent:
      'When using the expansion module for the first time, you must install a CA certificate randomly generated by Proxyee Down, click the install button below and press the system to confirm the installation. The program will detect whether the Proxyee Down CA certificate has been installed in the operating system before installation. (Tip:If it detects the installation, it will prompt to delete the corresponding old CA certificate)',
    install: 'Install',
    globalProxy: 'Global Proxy',
    proxyTip: 'Click to view instructions',
    copyPac: 'Copy PAC URL',
    title: 'Title',
    description: 'Desc',
    currVersion: 'Curr Ver',
    newVersion: 'New Ver',
    installStatus: 'Status',
    installStatusTrue: 'ON',
    installStatusFalse: 'OFF',
    action: 'Action',
    actionUpdate: 'Update',
    actionInstall: 'Install',
    actionDetail: 'Detail',
    switch: 'Switch',
    downloadingTip: 'Downloading...[servers(',
    downloadOk: 'Download successful',
    downloadErr: 'Download failed',
    downloadErrTip: 'Automatically switch servers'
  },
  setting: {
    downSetting: 'Down setting',
    path: 'Path',
    pathTip: 'Default download path',
    connections: 'Connections',
    connectionsTip: 'Default download connections',
    taskLimit: 'Simultaneous download tasks',
    taskSpeedLimit: 'Single task speed limit',
    globalSpeedLimit: 'Global speed limit',
    speedLimitTip: '0 is unlimited speed',
    appSetting: 'System setting',
    language: 'Language',
    uiMode: 'UI mode',
    uiModeWindows: 'Windows',
    uiModeBrowser: 'Browser',
    checkUpdate: 'Check for update',
    checkUpdateWeek: 'Every week',
    checkUpdateStartup: 'Every time startup',
    checkUpdateNever: 'Never',
    secondProxy: {
      secondProxy: 'Second proxy',
      tip: 'Configure the second (pre-proxy) proxy server for the downloader',
      type: 'Type',
      host: 'Host',
      port: 'Port',
      user: 'Username',
      pwd: 'password'
    }
  },
  about: {
    project: {
      title: 'Project',
      content:
        'Proxyee-Down is an open source, free software based on the software\'s high-speed download kernel and extensions to easily and quickly download the required resources.',
      githubAddress: 'Project Homepage: ',
      tutorial: 'Use Tutorial: ',
      feedback: 'Feedback: ',
      currentVersion: 'Current Version: '
    },
    team: {
      title: 'Team'
    }
  },
  update: {
    checkNew: 'New version',
    version: 'version',
    changeLog: 'Change log',
    update: 'Update',
    done: 'Update completed',
    restart: 'Is it restarted?',
    error: 'Update failed, please check the network or manually download the update package'
  },
  alert: {
    refused: 'Program exception,Connect Refused',
    timeout: 'Program exception,Connect Time Out',
    error: 'Program Error',
    notFound: 'Task not found',
    '/tasks': {
      post: {
        4000: 'Params parse error',
        4001: 'Request is empty',
        4002: 'Request URL is empty',
        4003: 'File save path is empty',
        4004: 'Failed to create folder',
        4005: 'No write permission',
        4006: 'Not enough disk space',
        4007: 'File already exists'
      }
    }
  },
  '/util/resolve': {
    put: {
      4000: 'Params parse error',
      4001: 'Request URL is empty',
      4002: 'Response status code exception',
      4003: 'Request timeout'
    }
  },
  '/config': {
    put: {
      4000: 'Params parse error'
    }
  }
}
