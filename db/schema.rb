# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20181027205450) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_admin_comments", force: :cascade do |t|
    t.string   "namespace"
    t.text     "body"
    t.string   "resource_id",   null: false
    t.string   "resource_type", null: false
    t.string   "author_type"
    t.integer  "author_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["author_type", "author_id"], name: "index_active_admin_comments_on_author_type_and_author_id", using: :btree
    t.index ["namespace"], name: "index_active_admin_comments_on_namespace", using: :btree
    t.index ["resource_type", "resource_id"], name: "index_active_admin_comments_on_resource_type_and_resource_id", using: :btree
  end

  create_table "admin_users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_admin_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true, using: :btree
  end

  create_table "allergies", force: :cascade do |t|
    t.integer  "provider_id"
    t.integer  "patient_id"
    t.string   "name"
    t.string   "severity"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["patient_id"], name: "index_allergies_on_patient_id", using: :btree
    t.index ["provider_id"], name: "index_allergies_on_provider_id", using: :btree
  end

  create_table "appointments", force: :cascade do |t|
    t.integer  "provider_id"
    t.integer  "patient_id"
    t.integer  "condition_id"
    t.date     "date"
    t.string   "time"
    t.text     "patient_summary"
    t.string   "concern"
    t.string   "status"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "app_type"
    t.text     "concern_desc"
    t.text     "symptoms"
    t.string   "other_symptoms"
    t.string   "temp"
    t.string   "heart_rate"
    t.string   "bp"
    t.string   "q1"
    t.string   "q2"
    t.string   "file"
    t.index ["condition_id"], name: "index_appointments_on_condition_id", using: :btree
    t.index ["patient_id"], name: "index_appointments_on_patient_id", using: :btree
    t.index ["provider_id"], name: "index_appointments_on_provider_id", using: :btree
  end

  create_table "conditions", force: :cascade do |t|
    t.integer  "provider_id"
    t.integer  "patient_id"
    t.string   "name"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["patient_id"], name: "index_conditions_on_patient_id", using: :btree
    t.index ["provider_id"], name: "index_conditions_on_provider_id", using: :btree
  end

  create_table "drinks", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.string   "steps"
    t.string   "source"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "immunizations", force: :cascade do |t|
    t.integer  "provider_id"
    t.integer  "patient_id"
    t.string   "name"
    t.string   "dose"
    t.date     "date"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["patient_id"], name: "index_immunizations_on_patient_id", using: :btree
    t.index ["provider_id"], name: "index_immunizations_on_provider_id", using: :btree
  end

  create_table "ingredients", force: :cascade do |t|
    t.integer  "drink_id"
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["drink_id"], name: "index_ingredients_on_drink_id", using: :btree
  end

  create_table "patients", force: :cascade do |t|
    t.integer  "provider_id"
    t.string   "first_name"
    t.string   "last_name"
    t.date     "dob"
    t.integer  "personal_health_number"
    t.bigint   "telephone"
    t.string   "email"
    t.string   "password"
    t.string   "sex"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.index ["provider_id"], name: "index_patients_on_provider_id", using: :btree
  end

  create_table "prescriptions", force: :cascade do |t|
    t.integer  "provider_id"
    t.integer  "patient_id"
    t.string   "name"
    t.string   "dose"
    t.string   "quantity"
    t.integer  "refill"
    t.string   "route"
    t.date     "date"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["patient_id"], name: "index_prescriptions_on_patient_id", using: :btree
    t.index ["provider_id"], name: "index_prescriptions_on_provider_id", using: :btree
  end

  create_table "providers", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.integer  "billing_number"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "soaps", force: :cascade do |t|
    t.integer  "provider_id"
    t.integer  "appointment_id"
    t.text     "doctor_summary"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["appointment_id"], name: "index_soaps_on_appointment_id", using: :btree
    t.index ["provider_id"], name: "index_soaps_on_provider_id", using: :btree
  end

  create_table "vitals", force: :cascade do |t|
    t.integer  "provider_id"
    t.integer  "patient_id"
    t.integer  "bp_s"
    t.integer  "bp_d"
    t.float    "weight_kg"
    t.float    "height_cm"
    t.float    "temperature_c"
    t.integer  "pulse"
    t.float    "bmi"
    t.date     "date"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["patient_id"], name: "index_vitals_on_patient_id", using: :btree
    t.index ["provider_id"], name: "index_vitals_on_provider_id", using: :btree
  end

  add_foreign_key "allergies", "patients"
  add_foreign_key "allergies", "providers"
  add_foreign_key "appointments", "conditions"
  add_foreign_key "appointments", "patients"
  add_foreign_key "appointments", "providers"
  add_foreign_key "soaps", "appointments"
  add_foreign_key "soaps", "providers"
end
