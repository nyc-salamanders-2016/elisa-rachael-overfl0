class User < ApplicationRecord
  has_many :questions
  has_many :answers
  has_many :comments
  has_many :votes
  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :username, presence: :true, uniqueness: true
end
