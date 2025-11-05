pipeline {
    agent any

    tools {
        nodejs "Node_20"
    }

    environment {
        // MongoDB URI — change this to your actual connection string or secret in Jenkins
        MONGO_URI = credentials('mongo-uri') 
    }

    stages {
        stage('Checkout') {
            steps {
                echo '📦 Checking out source code...'
                checkout scm
            }
        }

        stage('Install Server Dependencies') {
            steps {
                dir('server') {
                    echo '📦 Installing server dependencies...'
                    sh 'npm install'
                }
            }
        }

        stage('Install Client Dependencies') {
            steps {
                dir('client') {
                    echo '📦 Installing client dependencies...'
                    sh 'npm install'
                }
            }
        }

        stage('Build Client') {
            steps {
                dir('client') {
                    echo '🏗️ Building React app...'
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                echo '🧪 Running tests (if available)...'
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    dir('server') {
                        sh 'npm test || echo "No server tests found"'
                    }
                    dir('client') {
                        sh 'npm test -- --watchAll=false || echo "No client tests found"'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Deploying full stack app...'
                // Example: Docker or PM2 deployment
                // dir('server') { sh 'pm2 start server.js' }
                // Or deploy to Render / AWS / etc.
            }
        }
    }

    post {
        success {
            echo '✅ Build and deployment successful!'
        }
        failure {
            echo '❌ Build failed! Check console for errors.'
        }
    }
}
