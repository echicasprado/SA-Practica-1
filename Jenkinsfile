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
                nodejs('node'){
                    sh 'sudo sa-practica1/test.sh'
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