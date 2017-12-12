class Api::MenusController < ApplicationController
  before_action :set_api_menu, only: [:show, :update, :destroy]

  # GET /api/menus
  def index
    render json: Menu.all
  end

  # GET /api/menus/1
  def show
    render json: @menu
  end

  # POST /api/menus
  def create
    @menu = Menu.new(menu_params)

    if @menu.save
      render json: @menu, status: :created, location: @menu
    else
      render json: @menu.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/menus/1
  def update
    if @menu.update(menu_params)
      render json: @menu
    else
      render json: @menu.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/menus/1
  def destroy
    @menu.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_menu
      @menu = Menu.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def menu_params
      params.require(:menu).permit(:name, :description, :price)      
    end
end
