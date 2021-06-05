pipeline{
    agent any
    stages{
        stage('Build'){
            steps{
                sh 'java --version'
            }
        }
        stage('Test'){
            steps{
                sh 'npm start'
            }
        }
        stage('Deploy'){
            steps{
                sh 'java --version'
            }
        }
    }
}