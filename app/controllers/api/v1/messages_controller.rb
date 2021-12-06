class Api::V1::MessagesController < ApplicationController
  before_action :set_message, only: %i[show edit update destroy]

  def random_greeting
    @random = Message.order('RANDOM()').limit(1)
    render json: @random
  end

  def index
    p Message.all
    @messages = Message.all
  end

  # GET /messages/1 or /messages/1.json
  def show; end

  # GET /messages/new
  def new
    @message = Message.new
  end

  # GET /messages/1/edit
  def edit; end

  # POST /messages or /messages.json
  def create
    @message = Message.new(message_params)

    respond_to do |format|
      if @message.save
        format.json { render :show, status: :created, location: @message }
      else
        format.json { render json: @message.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /messages/1 or /messages/1.json
  def update
    respond_to do |format|
      if @message.update(message_params)
        format.json { render :show, status: :ok, location: @message }
      else
        format.json { render json: @message.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /messages/1 or /messages/1.json
  def destroy
    @message.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_message
    @message = Message.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def message_params
    params.require(:message).permit(:greeting)
  end
end
