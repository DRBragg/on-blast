require 'rails_helper'

feature "User visits home page", js: true do
  let!(:user1) {FactoryGirl.create(:user)}
  let!(:representative1) {FactoryGirl.create(:representative)}
  scenario "User is not signed in" do
    visit root_path

    expect(page).to have_content(representative1.name)
  end

  scenario "User is signed in" do
    visit root_path
    click_link "Sign In"
    fill_in "Email", with: user1.email
    fill_in "user_password", with: user1.password
    click_button "Sign In"

    expect(page).to have_content("Signed in successfully")
  end
end
