class Api::MessagesController < ApplicationController
  def index
    group = Group.find(request.url[33..33])
    @messages = group.messages.all
    render json: @messages
  end

  def create
    group = Group.find(params.permit(:group_id)[:group_id])
    @message = group.messages.create(message: params[:message])
    render json: @message
  end
end