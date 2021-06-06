pipeline{

    agent any

    tools {nodejs "node"}
    
    stages{
        stage('Build'){
            steps{
                sh './sa-practica1/install.sh'
            }
        }
        stage('Test'){
            steps{
                sh './sa-practica1/test.sh'
            }
        }
        stage('Deploy'){
            steps{
                sh './sa-practica1/start.sh'
            }
        }
    }
}