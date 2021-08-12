class User < ApplicationRecord
    has_many :jokes, dependent: :delete_all
    has_many :comments
end
