pipeline {
  agent any
  stages {
    stage('Install dependencies') {
      parallel {
        stage('Install dependencies') {
          steps {
            sh 'npm install'
            echo 'dependencies installed'
          }
        }
        stage('Check for linting') {
          steps {
            warnError(catchInterruptions: true, message: 'Checking for linting errors') {
              sh 'npm run check-eslint-config'
            }

          }
        }
      }
    }
    
    stage('Generate static .zip') {
      steps {
        dir(path: 'dist') {
          sh '''zip ../page-${BUILD_NUMBER}.zip -r * .[^.]*
'''
        }

      }
    }
    
  }
}