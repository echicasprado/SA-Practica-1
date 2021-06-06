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
                sh 'npm test'
            }
        }
        stage('Deploy'){
            steps{
                sh 'java --version'
            }
        }
    }
}