class Event < ApplicationRecord
 # validates :title, presence: true
 validate :add_error_sample
 
  def add_error_sample
    # nameが空のときにエラーメッセージを追加する
    if title.blank?
      errors[:base] << "名前は必ず入力して下さい"
    end
  end
end
