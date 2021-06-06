pipeline{
    agent any
    stages{
        stage('Build'){
            steps{
                sh 'npm --version'
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