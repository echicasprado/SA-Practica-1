pipeline{

    agent any

    tools {nodejs "node"}
    
    stages{
        stage('Build'){
            steps{
                sh 'npm config ls'
                sh 'chmod +x ./sa-practica1/install.sh'
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