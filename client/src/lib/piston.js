
const PISTON_API = "https://emkc.org/api/v2/piston"

const LANGUAGE_VERSIONS = {
  javascript: {
    language:"javascript",
    version: "18.15.0"
  },
  python : {
    language : "python",
    version : "3.10.0"
  },
  java : {
    language : "java",
    version : "15.0.2"
  }
}

const getFileExtensions = (language) => {
  const extensions = {
    javascript : "js",
    python : "py",
    java : "java"
  }
  return extensions[language] || "txt";
}

export const executeCode = async(language,code) => {
  try {
    const LANGUAGE_CONFIG = LANGUAGE_VERSIONS[language];
    if(!LANGUAGE_CONFIG){
      return {
        success : false,
        error : `Unsupported Language: ${language}`
      }
    }
    const response = await fetch(`${PISTON_API}/execute`,{
      method:"POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify({
        language:LANGUAGE_CONFIG.language,
        version:LANGUAGE_CONFIG.version,
        files: {
          name:`main.${getFileExtensions(language)}`,
          content: code
        }
      })
    })
  } catch (error) {
    console.log(error)
  }
}