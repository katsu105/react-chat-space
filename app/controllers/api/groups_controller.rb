class Api::GroupsController < ApplicationController
  def index
    @groups = Group.all
    render json: @groups
  end


  # def fetch_group_name
  #   @group_name = Group.find(params)
  #   render json: @group_name
  # end
end
