pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                nodejs('node'){
                    sh 'npm --version'
                    sh 'npm i -g mocha'
                    sh 'npm install'
                    sh 'npm start &'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                nodejs('node'){
                    sh 'npm test'
                }
            }
        }
        stage('Deploy') {
            steps {
                ansiblePlaybook installation: 'ansible', playbook: '${workspace}/ansible.yml'
            }
        }
    }
}
