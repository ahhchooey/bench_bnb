class Api::BenchesController < ApplicationController
  
  def create
    @bench = Bench.new(bench_params)
    
    if @bench.save
      render :show
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  def index
    @benches = Bench.all
    if params[:bounds]
      @benches = Bench.in_bounds(params[:bounds])
    end
    if params[:maxSeating]
      @benches = @benches.where("benches.occupancy <= #{params[:maxSeating]}")
    end
    if params[:minSeating]
      @benches = @benches.where("benches.occupancy >= #{params[:minSeating]}")
    end
    render :index 
  end

  private
  def bench_params
    params.require(:bench).permit(:lng, :lat, :description, :bounds, :occupancy, :max_seating, :min_seating)
  end
end
