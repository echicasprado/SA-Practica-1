pipeline{
    agent any

    tools {nodejs "node"}
    
    stages{
        stage('Build'){
            steps{
                sh 'npm config ls'
                sh 'npm install npm@latest -g'
                sh 'node --version'
                sh 'npm --version'
            }
        }
        stage('Test'){
            steps{
                sh 'cd sa-practica1'
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