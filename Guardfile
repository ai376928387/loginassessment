javascripts_dir = "assets/js"
javascripts_src_dir = "src/js"
javascripts_uncompress_file = javascripts_dir+'/dev/main.js'

css_dir         = "assets/css"
sass_dir        = "src/sass"
css_uncompress_file = css_dir+'/style.css';

# ~/.guardfile

# More info at https://github.com/guard/guard#readme
notification :off

puts "Using default guard file."

group :development do

  if File.exists?("./config.rb")
    # Compile on start.
    puts `compass compile --time --quiet`
    # https://github.com/guard/guard-compass
    guard :compass do
      watch(%r{(.*)\.s[ac]ss$})
    end
  end

  ## Uncomment if running a Drupal theme. Clears .info caches. Requires Drush.
  # if Dir.glob("*.info").any?
  #   guard :shell do
  #     puts 'Monitoring theme info file.'
  #     watch(%r{.*\.info$}) { |m|
  #       puts 'Change detected: ' + m[0]
  #       `drush php-eval "system_rebuild_theme_data();"`
  #       puts 'Cleared info caches.'
  #     }
  #   end
  # end

  #Get All JS files from the JS src folders.
  def getJSfiles(javascripts_src_dir)
    js_files = %w()
    Dir[javascripts_src_dir + "/*.js"].sort.each do |file_name|
      js_files.push(file_name.gsub(javascripts_src_dir + "/", '').gsub('.js', ''))
    end
    return js_files
  end

  #Merge All JS files by its sequence eg 100-jquery.js, 101-somethingelse.js
  guard :concat,
    type: "js",
    files: getJSfiles(javascripts_src_dir),
    input_dir: javascripts_src_dir,
    output: javascripts_dir + "/dev/main",
    verbose:true do
      watch(%r{.javascripts_src_dir+\.(js)$})
    end

  #Minify JS / CSS
  guard :shell do
  watch /.*/ do |m|
      if m[0].include? javascripts_uncompress_file
        system('juicer merge '+javascripts_uncompress_file+' -o '+javascripts_dir+'/production.js --force -s')
      end

      if m[0].include? css_uncompress_file
        system('juicer merge '+css_uncompress_file+' -o '+css_dir+'/production.css --force -s')
      end
    end
  end

  # Uncomment block above and remove this if using Ruby 1.9 or greater.
  # https://github.com/guard/guard-livereload.
  guard :livereload do
    watch(%r{.+\.(css|js|html?|php|inc|theme|module|info)$})
  end

end

# This will concatenate the javascript files specified in :files to public/js/all.js
#
# Specifying every single file in the array like %w(a b c) to maintain the loading order is suggested - See https://github.com/makevoid/guard-concat for more info
#