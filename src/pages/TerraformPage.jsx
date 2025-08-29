import React from "react";

const TerraformPage = () => {
    return (
        <div className="p-4">
            <div className="p-6 space-y-6">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Terraform Reference (Google Cloud Focus)
                </h1>
                <p className="text-center italic underline mb-6">This was written by AI and cleaned up to help me fix an error I will recreate later this fix is killing me I am learning IaC</p>
                <p className="text-center">This will be changed soon hopefully soon we might be on Elon time for all I know ... moving so fast yet still 3 months late to previous claims</p>
                {/* 1. Language Basics */}
                <div className="card bg-base-200 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">1. Language Basics</h2>
                        <p>Terraform uses HCL (HashiCorp Configuration Language). Core structure:</p>
                        <pre className="bg-base-300 p-4 rounded">
{`resource "PROVIDER_TYPE" "NAME" {
    argument = value
}`}
                        </pre>

                        <h3 className="font-bold mt-4">Keywords</h3>
                        <ul className="list-disc list-inside">
                            <li><code>resource</code> – define infrastructure</li>
                            <li><code>provider</code> – configure cloud provider</li>
                            <li><code>variable</code> – parameterize configs</li>
                            <li><code>output</code> – expose values after apply</li>
                            <li><code>module</code> – reusable group of resources</li>
                            <li><code>locals</code> – define local variables</li>
                        </ul>

                        <h3 className="font-bold mt-4">Variable Example</h3>
                        <pre className="bg-base-300 p-4 rounded">
{`variable "project_id" {
    type        = string
    description = "Google Cloud project ID"
}

provider "google" {
    project = var.project_id
    region  = "us-central1"
}`}
                        </pre>
                    </div>
                </div>

                {/* 2. Command Line Usage */}
                <div className="card bg-base-200 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">2. Command Line Usage</h2>
                        <ul className="list-disc list-inside">
                            <li><code>terraform init</code> – initialize project</li>
                            <li><code>terraform plan</code> – preview changes</li>
                            <li><code>terraform apply -auto-approve</code> – apply changes</li>
                            <li><code>terraform destroy -auto-approve</code> – tear down infra</li>
                            <li><code>terraform fmt</code> – format configs</li>
                            <li><code>terraform validate</code> – check for errors</li>
                            <li><code>terraform show</code> – inspect current state</li>
                        </ul>
                    </div>
                </div>

                {/* 3. Common Google Cloud Blocks */}
                <div className="card bg-base-200 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">3. Common Google Cloud Blocks</h2>

                        {/* Cloud Run Service */}
                        <h3 className="font-bold mt-2">Google Cloud Run Service</h3>
                        <pre className="bg-base-300 p-4 rounded">
{`resource "google_cloud_run_service" "service" {
    name     = "example-service"
    location = "us-central1"

    template {
        spec {
            containers {
                image = "gcr.io/my-project/my-app:latest"
                ports {
                    container_port = 8080
                }
            }
        }
    }

    traffics {
        percent         = 100
        latest_revision = true
    }
}`}
                        </pre>

                        {/* Storage Bucket */}
                        <h3 className="font-bold mt-4">Google Cloud Storage Bucket</h3>
                        <pre className="bg-base-300 p-4 rounded">
{`resource "google_storage_bucket" "bucket" {
    name          = "my-example-bucket"
    location      = "US"
    force_destroy = true
}`}
                        </pre>

                        {/* VPC Network */}
                        <h3 className="font-bold mt-4">Google VPC Network</h3>
                        <pre className="bg-base-300 p-4 rounded">
{`resource "google_compute_network" "vpc_network" {
    name                    = "example-vpc"
    auto_create_subnetworks = false
}`}
                        </pre>

                        {/* Cloud SQL */}
                        <h3 className="font-bold mt-4">Google Cloud SQL (Postgres)</h3>
                        <pre className="bg-base-300 p-4 rounded">
{`resource "google_sql_database_instance" "db" {
    name             = "example-db"
    database_version = "POSTGRES_14"
    region           = "us-central1"

    settings {
        tier = "db-f1-micro"
    }
}`}
                        </pre>
                    </div>
                </div>

                {/* Summary */}
                <div className="card bg-primary text-primary-content shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Summary</h2>
                        <ul className="list-disc list-inside">
                            <li><b>Basics:</b> HCL, resources, variables, providers</li>
                            <li><b>CLI:</b> init, plan, apply, destroy, validate</li>
                            <li><b>GCP Templates:</b> VM, Storage, VPC, Cloud SQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default TerraformPage;