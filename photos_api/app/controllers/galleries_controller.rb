class GalleriesController < ApplicationController
  before_action :set_gallery, only: [:show, :update, :destroy]

  # GET /galleries
  def index
    galleries = Gallery.all

    render json: galleries.to_json(:include => :photos)
  end

  # GET /galleries/1
  def show
    gallery = Gallery.find_by_id(params[:id])
    render json: gallery
  end

  # POST /galleries
  def create
    gallery = Gallery.find_or_create_by(gallery_params)

    if gallery.save
      render json: gallery, status: :created, location: gallery
    else
      render json: gallery.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /galleries/1
  def update
    if gallery.update(gallery_params)
      render json: gallery
    else
      render json: gallery.errors, status: :unprocessable_entity
    end
  end

  # DELETE /galleries/1
  def destroy
    gallery.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gallery
      gallery = Gallery.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def gallery_params
      params.require(:gallery).permit(:name)
    end
end
