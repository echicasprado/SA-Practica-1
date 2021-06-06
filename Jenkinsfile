pipeline{
    agent any

    tools {nodejs "node"}
    
    stages{
        stage('Build'){
            steps{
                sh 'npm config ls'
                sh 'npm install'
            }
        }
        stage('Test'){
            steps{
                sh 'node --version'
                sh 'npm --version'
            }
        }
        stage('Deploy'){
            steps{
                sh 'npm start'
            }
        }
    }
}