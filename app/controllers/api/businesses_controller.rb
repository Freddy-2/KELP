class Api::BusinessesController < ApplicationController
    
    def index
        @businesses = Business.all
        render :index 
    end


    def show 
        @business = Business.find(params[:id])
        render :show
    end

    private

    def business_params
    params.require(:user).permit(:title, :description, :longitude, :latitude, :address, :price, :opening_hours, :closing_hours)
    end
end
