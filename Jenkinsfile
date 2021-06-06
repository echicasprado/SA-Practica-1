pipeline{
    agent any

    tools {nodejs "node"}
    
    stages{
        stage('Build'){
            steps{
                sh 'npm config ls'
            }
        }
        stage('Test'){
            steps{
                sh 'node --version'
            }
        }
        stage('Deploy'){
            steps{
                sh 'java --version'
            }
        }
    }
}