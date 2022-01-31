pipeline{
    agent any
    stages{
        stage("Installing Dependencies"){
            steps{
                script{
                    bat label: 'Install NPM package', script: 'npm install'
                }
            }
        }
        stage("Running Test Case"){
            steps{
                script{
                    // bat label: 'Run tests', script: 'npx cypress run --headed --browser chrome'
                    bat label: 'Run tests', script: 'npx cypress run'
                }
            }
        }
    }
}