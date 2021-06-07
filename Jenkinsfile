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
                echo 'Test'
            }
        }
        stage('Deploy'){
            steps{
                echo 'Hola mundo'
            }
        }
    }
}