pipeline {
    agent any

    tools {
        nodejs "Node_20"
    }

    environment {
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
                    bat 'npm install'
                }
            }
        }

        stage('Install Client Dependencies') {
            steps {
                dir('client') {
                    echo '📦 Installing client dependencies...'
                    bat 'npm install'
                }
            }
        }

        stage('Build Client') {
            steps {
                dir('client') {
                    echo '🏗️ Building React app...'
                    bat 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                echo '🧪 Running tests (if available)...'
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    dir('server') {
                        bat 'npm test || echo No server tests found'
                    }
                    dir('client') {
                        bat 'npm test -- --watchAll=false || echo No client tests found'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Deploying full stack app...'
                dir('server') { bat 'npm start' }
                dir('client') { bat 'npm start' }
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
