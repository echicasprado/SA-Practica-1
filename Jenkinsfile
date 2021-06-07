pipeline{

    agent any

    tools {nodejs "node"}
    
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
                nodejs('node'){
                    sh 'npm test'
                }
            }
        }
        stage('Deploy'){
            steps{
                nodejs('node'){
                    sh 'npm start'
                }
            }
        }
    }
}