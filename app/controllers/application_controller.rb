class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception,
                       unless: -> { request.env['REQUEST_PATH'] =~ (/^\/api/) }
end
