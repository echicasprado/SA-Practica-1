pipeline{
    agent any

    stages{
        stage('Build'){
            steps{
                dir("sa-practica1"){
                    nodejs('node'){
                        sh 'npm --version'
                        sh 'npm install'
                    }
                }
            }
        }
        stage('Test'){
            steps{
                echo 'Test'
                dir("sa-practica1"){
                    nodejs('node')
                        sh 'npm test'
                    }
                }
            }
        }
        stage('Deploy'){
            steps{
                echo 'Hola mundo'
                dir("sa-practica1"){
                    nodejs('node')
                        sh 'npm start'
                    }
                }
            }
        }
    }
}