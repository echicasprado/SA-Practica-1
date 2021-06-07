pipeline{
    agent any

    stages{
        stage('Build'){
            steps{
                nodejs('node'){
                    sh 'npm --version'
                    sh 'npm install'
                }
            }
        }
        stage('Test'){
            steps{
                echo 'Test'
                sh 'npm test'
            }
        }
        stage('Deploy'){
            steps{
                echo 'Hola mundo'
            }
        }
    }
}