class AddPublishedToStories < ActiveRecord::Migration
  def change
    add_column :stories, :published, :boolean
  end
end
