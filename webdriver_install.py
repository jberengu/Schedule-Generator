import chromedriver_install as cdi
path = cdi.install(file_directory='./lib/', verbose=True, chmod=True, overwrite=False, version=None, filename=None)
print('Installed chromedriver to path: %s' % path)