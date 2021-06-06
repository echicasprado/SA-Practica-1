pipeline{
    agent any

    tools {nodejs "node"}
    
    stages{
        stage('Build'){
            steps{
                sh 'npm config ls'
                sh 'node --version'
                sh 'npm --version'
            }
        }
        stage('Test'){
            steps{
                sh 'npm test'
            }
        }
        stage('Deploy'){
            steps{
                sh 'npm init'
            }
        }
    }
}