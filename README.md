# Blog [carlosal1015.github.io](https://carlosal1015.github.io)

## Instructions ⚙️

Please check if the installation of ruby on rails is correct with next instructions below:

```sh
$ rvm --version
rvm 1.29.10 (latest) by Michal Papis, Piotr Kuczynski, Wayne E. Seguin [https://rvm.io]
$ ruby --version
ruby 2.7.2p137 (2020-10-01 revision 5445e04352) [x86_64-linux]
$ bundle --version
Bundler version 2.2.2
$ gem --version
3.2.2
```

Otherwise, please visit their website for more information about the installation in your system.

### Useful links:

- [Ruby language -- A Programmer's Best Friend](https://www.ruby-lang.org)
- [Bundler -- The best way to manage a Ruby application's gems](https://bundler.io)
- [RubyGems -- Find, install, and publish RubyGems.](https://rubygems.org)
- [Ruby Version Manager (RVM)](https://rvm.io)
- [RVM is not a function, selecting rubies with 'rvm use ...' will not work.](https://stackoverflow.com/a/27990042/9302545)
- [RVM ArchWiki](https://wiki.archlinux.org/index.php/RVM)

```sh
$ curl -L get.rvm.io > rvm-install
$ bash < ./rvm-install
$ source /home/carlosal1015/.rvm/scripts/rvm
$ deepin-editor .zshrc
$ source .zshrc
$ gem install --user-install bundle
$ rvm get stable
```

### Installation

```sh
$ bundle config set path 'vendor/bundle'
Your application has set path to "vendor/bundle". This will override the global value you are currently setting
$ bundle update --bundler # Update bundler
...
Bundle updated!
$ bundle update # Update all gems, do not recommended.
$ gem cleanup # Remove old version of dependencies
$ bundle exec jekyll clean
$ bundle exec jekyll build
$ bundle exec jekyll serve
$ gem update --system # Optional
```

### Reproduce

```sh
$ bundle exec jekyll clean
$ bundle exec jekyll build
$ bundle exec jekyll serve
```

Go to the server address: [localhost:4000](http://127.0.0.1:4000) in the browser.
