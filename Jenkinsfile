pipeline{
    agent any

    stages{
        stage('Build'){
            steps{
                nodejs('node'){
                    sh 'npm --version'
                }
            }
        }
        stage('Test'){
            steps{
                nodejs('node'){
                    sh 'node --version'
                }
            }
        }
        stage('Deploy'){
            steps{
                echo 'Hola mundo'
            }
        }
    }
}