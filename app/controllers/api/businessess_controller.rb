class Api::BusinessessController < ApplicationController
    
    def index
        @businesses = Business.all
    end

    def show 
        @business = Business.find(params[:id])
    end
   
end
