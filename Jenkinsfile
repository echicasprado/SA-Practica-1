pipeline{
    agent{
        docker{
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }

    // tools {nodejs "node"}
    
    stages{
        stage('Build'){
            steps{
                sh 'npm install'
            }
        }
        // stage('Test'){
        //     steps{
        //         sh 'node --version'
        //         sh 'npm --version'
        //     }
        // }
        // stage('Deploy'){
        //     steps{
        //         sh 'npm start'
        //     }
        // }
    }
}