task :default do
  sh "browserify -o bundle.js -t [ babelify --presets [ @babel/preset-env ] ] app.js"
end

task :budo do
  sh "budo --open"
end
