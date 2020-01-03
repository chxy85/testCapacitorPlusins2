
  Pod::Spec.new do |s|
    s.name = 'CapacitorPluginWxchat'
    s.version = '0.0.1'
    s.summary = 'wxchat functions'
    s.license = 'MIT'
    s.homepage = 'https://github.com/chxy85/testCapacitorPlusins2.git'
    s.author = 'cx'
    s.source = { :git => 'https://github.com/chxy85/testCapacitorPlusins2.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end